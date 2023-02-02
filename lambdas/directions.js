"use strict";

module.exports.directions = async (event) => {
  const MAPBOX_API_TOKEN = process.env.MAPBOX_API_TOKEN;
  const route = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${MAPBOX_API_TOKEN}`
  );
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        route: route,
        input: event,
      },
      null,
      2
    ),
  };
};
