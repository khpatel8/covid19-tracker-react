import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Circle, Popup } from "react-leaflet";
import { states } from "../api";

export default function Map({ center, zoom, data, state }) {
  return (
    <div className="map">
      <LeafletMap
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        maxBounds={[
          [5.49955, -167.276413],
          [83.162102, -52.23304],
        ]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {state === "US" && (
          <Circle
            center={[center.lat, center.lng]}
            fillOpacity={0.4}
            color={"rgba(250, 45, 45, 1)"}
            fillColor={"rgba(270, 45, 45, 1)"}
            radius={Math.sqrt(data.confirmed) * 450}
          >
            <Popup>
              <h3>Confirmed: {data.confirmed}</h3>
              <h3>Recovered: {data.recovered}</h3>
              <h3>Deaths: {data.deaths}</h3>
            </Popup>
          </Circle>
        )}

        {state !== "US" &&
          states.map((state) => (
            <Circle
              key={state.abbreviation}
              center={[state.latitude, state.longitude]}
              fillOpacity={0.4}
              color={"rgba(250, 45, 45, 1)"}
              fillColor={"rgba(270, 45, 45, 1)"}
              radius={Math.sqrt(data[state.abbreviation].confirmed) * 450}
            >
              <Popup>
                <h3>Confirmed : {data[state.abbreviation].confirmed}</h3>
                <h3>Deaths : {data[state.abbreviation].deaths}</h3>
              </Popup>
            </Circle>
          ))}
      </LeafletMap>
    </div>
  );
}
