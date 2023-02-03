const { directions } = require("./directions");

// jest.mock("fetch")

describe("direcions", () => {
  it("should not throw", async () => {
    // fetch.get.mockResolvedValue()
    const ret = await directions();
    expect(ret).toMatchSnapshot();
  });
});
