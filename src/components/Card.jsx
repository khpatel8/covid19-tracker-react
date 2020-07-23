import React from "react";
import { Card as MCard, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

function Card({ data }) {
  function makeCard(number, type, color) {
    return (
      <MCard className="card">
        <CardContent>
          <Typography
            className={color}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <CountUp start={0} end={number} duration={0.5} separator="," />
          </Typography>
        </CardContent>
      </MCard>
    );
  }

  return (
    <div className="card-container">
      {makeCard(data.confirmed, "Total cases", "red")}
      {data.recovered !== 0 && makeCard(data.recovered, "Recoveries", "green")}
      {makeCard(data.deaths, "Deaths", "blue")}
    </div>
  );
}

export default Card;
