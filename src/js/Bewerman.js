import Character from ".Caracter";

export default class Bowerman extends Character {
    constructor(name) {
        super(name, type="Bowerman");
        this.attack = 25;
        this.defence = 25;
    }
}
