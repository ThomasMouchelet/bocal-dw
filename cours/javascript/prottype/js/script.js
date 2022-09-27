// https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png

const Player = function(pseudo, type){
    this.pseudo = pseudo
    this.type = type
    this.level = 1
    this.xp = 0
    this.life = 100
    this.description = function(){
        return `${this.pseudo} is a ${this.type} of level ${this.level} with ${this.life} life points.`;
    }
    this.upgradeXp = function(){
        this.xp += 10;
        if(this.xp >= 100){
            this.level += 1
        }
    }
    this.attack = function(cible){
        cible.life -= 10
        if(cible.life <= 0){
            return `${cible.pseudo} is dead`
        }
    }
}

const player1 = new Player("Bob", "Barbarian");
const player2 = new Player("Alice", "Wizard");

console.log(player1)
console.log(player1.description())
console.log(player2)
console.log(player2.description())

player1.attack(player2)
console.log(player1.description())
console.log(player2.description())