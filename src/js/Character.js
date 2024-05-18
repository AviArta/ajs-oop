export default class Character {
    constructor(name, type) {

    if (name.length < 2 || name.length > 10) {
        throw new Error("Имя должно быть от 2 до 10 символов.");
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
        throw new Error("Такого типа персонажа нет.");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("Нельзя повысить левел умершего.");
        }
        this.level += 1;
        this.attack *= 1.20;
        this.defence *= 1.20;
        this.health = 100;
        return this;
    }

    damage(points) {
        if (this.health < 0) {
            throw new Error("Нельзя применить изменение жизни для умершего.");
        }
        this.health -= points * (1 - this.defence / 100);
        return this;
    }
}
