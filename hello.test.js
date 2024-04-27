const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Saurabh as a part of MIT PE course on DevOps!");
  });
});
