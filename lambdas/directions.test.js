const { directions } = require("./directions");
const mock = require("./__mocks__/directionsMock.json");
const fetchmock = require("jest-fetch-mock");

fetchmock.enableMocks();

describe("direcions", () => {
  it("should not throw", async () => {
    fetch.mockResponseOnce(JSON.stringify(mock));
    const ret = await directions();
    expect(ret).toMatchSnapshot();
  });
});
