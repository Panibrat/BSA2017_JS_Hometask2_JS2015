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
        console.log(`${this.name} health: ${this.health}`);
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
let whoWin = function(player1, player2){
    if (player1.health == player2.health){
        return {'name': 'Friendship'}
    }
    if (player1.health > player2.health){
        return player1;
    }
    return player2;
}
//место для комментариев к функции
function fight(fighter, improvedFighter, ...point){
    for(let kick in point){
        if(!isAlive(fighter, improvedFighter)){
            console.log("DEAD!!! GAME OVER!");
            break;
        }
        if(kick %2 == 0){
            fighter.hit(improvedFighter, point[kick]);
        } else {
            improvedFighter.doubleHit(fighter, point[kick]);
        }
    }
    let winner = whoWin(fighter, improvedFighter);
    console.log(`${winner.name} wins!!!`);
    showScore(fighter);
    showScore(improvedFighter);
};


let fighter = new Fighter("Tayson", 10, 2000);
let improvedFighter = new ImprovedFighter("Klichko", 25, 2000);

fight(fighter, improvedFighter);
fight(fighter, improvedFighter, 0, 0, 0, 0);
fight(fighter, improvedFighter, 5, 2, 2, 8);
fight(fighter, improvedFighter, 5, 0, 2, 1, 4, 5, 2, 3, 1, 2, 3, 2, 3, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 6, 8, 9);
fight(fighter, improvedFighter);

