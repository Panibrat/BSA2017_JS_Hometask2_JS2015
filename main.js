//место для комментариев к классу
class Fighter{
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
//место для комментариев к классу
class ImprovedFighter extends Fighter{
    doubleHit(enemy, point = 0){
        point *= 2;
        super.hit(enemy, point);
    }
};
//место для комментариев к функции
let showScore = (player) => console.log(`${player.name} health: ${player.health}`);

//место для комментариев к функции
let isAlive = (player1, player2) => (player1.health && player2.health);

//место для комментариев к функции
function fight(fighter, improvedFighter, ...point){
    for(let kick in point){
        if(!isAlive(fighter, improvedFighter)){
            console.log("GAME OVER!");
            break;
        }
        if(kick %2 == 0){
            fighter.hit(improvedFighter, point[kick]);
        } else {
            improvedFighter.hit(fighter, point[kick]);
        }
    }
    showScore(fighter);
    showScore(improvedFighter);
};


let fighter = new Fighter("Vasya", 10, 1000);
let improvedFighter = new ImprovedFighter("superPetya", 10, 1000);

fight(fighter, improvedFighter, 53,21,2,3,4,53,2,33,2,33,2,3,4,53,2,3,4,53,2,3,4,53,64,7,8,91);
//fight(fighter, improvedFighter);

