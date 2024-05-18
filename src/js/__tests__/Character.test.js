import Character from "../Character";
import Undead from "../Undead";
import Magician from "../Magician";

// eslint-disable-next-line no-undef
test("check create object of class Character", () => {
    const angel = new Character("Angel", "Undead");
    const expectedValue = {name: "Angel", 
                        type: "Undead", 
                        health: 100, 
                        level: 1,
                        attack: null,
                        defence: null};
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

// eslint-disable-next-line no-undef
test("check method levelUp of class Character", () => {
    const angel1 = new Character("Angel", "Undead");
    const expectedValue = {name: "Angel", 
                        type: "Undead", 
                        health: 100, 
                        level: 2,
                        attack: 0,
                        defence: 0};

    // eslint-disable-next-line no-undef
    expect(angel1.levelUp()).toEqual(expectedValue);
});

// eslint-disable-next-line no-undef
test("check method levelUp with health=0", () => {
    const undead1 = new Undead("Una");
    undead1.health = 0;
    // eslint-disable-next-line no-undef
    expect(() => undead1.levelUp()).toThrow();
});

// eslint-disable-next-line no-undef
test("check method damage(points) of class Character", () => {
    const magician1 = new Magician("Magi");
    const expectedValue = {name: "Magi", 
                        type: "Magician", 
                        health: 64, 
                        level: 1,
                        attack: 10,
                        defence: 40};

    // eslint-disable-next-line no-undef
    expect(magician1.damage(60)).toEqual(expectedValue);
});

// eslint-disable-next-line no-undef
test("check method damage(points) with health<0", () => {
    const undead2 = new Undead("Unadead");
    undead2.health = -10;
    // eslint-disable-next-line no-undef
    expect(() => undead2.damage(10)).toThrow();
});