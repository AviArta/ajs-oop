import Character from ".Caracter";

export default class Daemon extends Character {
    constructor(name) {
        super(name, type="Daemon");
        this.attack = 10;
        this.defence = 40;
    }
}
