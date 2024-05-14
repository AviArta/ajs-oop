import Swordsman from "../Swordsman";

// eslint-disable-next-line no-undef
test("check create object Swordsman", () => {
  const swordsman = new Swordsman("Lessi");
  const expectedValue = {
    name: "Lessi",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }

  // eslint-disable-next-line no-undef
  expect(swordsman).toEqual(expectedValue);
});
