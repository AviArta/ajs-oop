import Character from ".Caracter";

export default class Swordsman extends Character {
    constructor(name) {
        super(name, type="Swordsman");
        this.attack = 40;
        this.defence = 10;
    }
}
