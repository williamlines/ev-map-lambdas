const { directions } = require("./directions");

describe("direcions", () => {
  it("should not throw", async () => {
    const ret = await directions();
    expect(ret).toMatchSnapshot();
  });
});
