import Character from ".Caracter";

export default class Undead extends Character {
    constructor(name) {
        super(name, type="Undead");
        this.attack = 25;
        this.defence = 25;
    }
}