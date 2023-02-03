const { hello } = require("./handler");

describe("handler", () => {
  it("should not throw", async () => {
    const ret = await hello();
    expect(ret).toMatchSnapshot();
  });
});
