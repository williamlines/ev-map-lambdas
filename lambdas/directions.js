"use strict";

const MAPBOX_API_TOKEN = process.env.MAPBOX_API_TOKEN;

module.exports.directions = async (event) => {
  await getDirections();

  const response = {
    statusCode: 200,
    body: "OK",
  };
  return response;
};

async function getDirections() {
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/13.43,52.51;13.42,52.5;13.41,52.5?radiuses=40;;100&geometries=polyline6&access_token=${MAPBOX_API_TOKEN}`;

  await fetch(url);
}
