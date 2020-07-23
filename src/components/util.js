import fetchTotalData, { states } from "../api";

export const dataSets = (numberOfCases, numberOfRecoveries, numberOfDeaths) => {
  let datasets = [];

  datasets.push({
    label: "Total cases",
    data: numberOfCases,
    backgroundColor: "rgba(236, 45, 45,0.7)",
    borderColor: "rgba(219, 49, 49,1)",
    borderWidth: 0.2,
  });

  if (numberOfRecoveries) {
    datasets.push({
      label: "Recoveries",
      data: numberOfRecoveries,
      backgroundColor: "rgba(45, 236, 45,0.7)",
      borderColor: "rgba(83, 19, 232,1)",
      borderWidth: 0.2,
    });
  }

  datasets.push({
    label: "Deaths",
    data: numberOfDeaths,
    backgroundColor: "rgba(45, 45, 236,0.7)",
    borderColor: "rgba(83, 19, 232,1)",
    borderWidth: 0.2,
  });

  return datasets;
};

export const getCord = (stateCode) => {
  const obj = states.filter((state) => state.abbreviation === stateCode);

  return {
    lat: obj[0].latitude,
    lng: obj[0].longitude,
  };
};

export const getStateDataAll = () => {
  const obj = {};

  states.map(async (state) => {
    const data = await fetchTotalData(state.abbreviation);

    obj[state.abbreviation] = {
      confirmed: data.confirmed,
      deaths: data.deaths,
    };
  });

  return obj;
};
