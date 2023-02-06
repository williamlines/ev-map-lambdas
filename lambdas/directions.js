"use strict";

const MAPBOX_API_TOKEN = process.env.MAPBOX_API_TOKEN;

module.exports.directions = async (event) => {
  console.log(event);
  const res = await getDirections();
  const data = await res.json();
  const response = {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: data,
      input: event,
    }),
  };
  return response;
};

async function getDirections() {
  const url = `https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${MAPBOX_API_TOKEN}`;
  let res;
  try {
    res = await fetch(url);
  } catch (error) {
    console.log(error);
  }
  return res;
}
