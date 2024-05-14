import Bowman from "../Bowman";

// eslint-disable-next-line no-undef
test("check create object Bowman", () => {
  const bowman = new Bowman("Alex");
  const expectedValue = {
    name: "Alex",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  // eslint-disable-next-line no-undef
  expect(bowman).toEqual(expectedValue);
});
