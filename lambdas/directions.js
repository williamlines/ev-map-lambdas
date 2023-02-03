"use strict";

const MAPBOX_API_TOKEN = process.env.MAPBOX_API_TOKEN;

module.exports.directions = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: data,
        input: event,
      },
      null,
      2
    ),
  };
};
