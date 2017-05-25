//место для комментариев к классу
export default class Fighter{
    constructor(name, power, health){
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDamage(damage = 0){
        this.health -= damage;
        this.health = (this.health < 0) ? 0:this.health;
        console.log(`health: ${this.health}`);
    }
    hit(enemy, point = 0){
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
};

