import Zombie from "../Zombie";

// eslint-disable-next-line no-undef
test("check create object Zombie", () => {
  const zombie = new Zombie("Zoo");
  const expectedValue = {
    name: "Zoo",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }

  // eslint-disable-next-line no-undef
  expect(zombie).toEqual(expectedValue);
});