"use strict";

const MAPBOX_API_TOKEN = process.env.MAPBOX_API_TOKEN;

module.exports.directions = async (event) => {
  const origin = event.queryStringParameters.origin || "-84.518641,39.134270";
  const destination =
    event.queryStringParameters.destination || "-84.518641,39.134270";

  const res = await getDirections(origin, destination);
  const data = await res.json();
  const response = {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: data,
      input: event,
      queryStringParameters: event.queryStringParameters,
    }),
  };
  return response;
};

// `https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${MAPBOX_API_TOKEN}`

async function getDirections(origin, destination) {
  const url = `https://api.mapbox.com/directions/v5/mapbox/cycling/${origin};${destination}?geometries=geojson&access_token=${MAPBOX_API_TOKEN}`;
  let res;
  try {
    res = await fetch(url);
  } catch (error) {
    console.log(error);
  }
  return res;
}
