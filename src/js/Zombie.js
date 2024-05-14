import Character from ".Caracter";

export default class Zombie extends Character {
    constructor(name) {
        super(name, type="Zombie");
        this.attack = 40;
        this.defence = 10;
    }
}