import Character from "../Character";

// eslint-disable-next-line no-undef
test("check create object of class Character", () => {
    const angel = new Character("Angel", "Undead");
    const expectedValue = {name: "Angel", 
                        type: "Undead", 
                        health: 100, 
                        level: 1,
                        attack: 0,
                        defence: 0};
    // eslint-disable-next-line no-undef
    expect(angel).toEqual(expectedValue) ;
});

// eslint-disable-next-line no-undef
test("check create object with uncorrect type", () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character("Angel", "Angel")).toThrow(Error) ;
});

// eslint-disable-next-line no-undef
test("check create object with uncorrect length of name", () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character("AngelAndelAngel", "Undead")).toThrow();
});