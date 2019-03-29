class StudentLog
{
  constructor( name ) {
    this.name = name;
    this.marks = {};
  }
  getName() {
    return this.name;
  }
  addGrade( grade, subject ) {
    if (!this.marks[subject]) { 
      this.marks[subject] = [grade];
    }
    if ( grade >= 1 && grade <= 5) {
     return this.marks[subject].push(grade);           
    } else {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допустимый предел: 1-5`);
    }
  }
  getAverageBy( subject ) {
    if( this.marks[subject] ) {
      let sum = 0;
      for (let i = 0; i < this.marks[subject].length; i++) {
        sum += this.marks[subject][i];
      }
      return (sum / this.marks[subject].length );
    } else {
      return 0;
    }
  }
  getTotalAverage() {
    if ( Object.keys(this.marks).length == 0 ) {
      return 0;
    } else {
    let counter = Object.values(this.marks).length,
        sum = 0;
    for (let key in this.marks ) {
      sum += this.getAverageBy(key);     
    }
    return sum / counter;
    } 
  }
  getGradesBySubject( subject ) {
     //список всех оценок по предмету. При отсутствии предмета в журнале, необходимо вернуть пустой массив
     return Object.values(this.marks[subject]);
  }
  getGrades() {
    return this.marks;
  }
}

let stud = new StudentLog( 'Oleg Nikiforov' );
stud.getName();


stud.addGrade(3, 'algebra');
stud.addGrade(4, 'geometry');
stud.addGrade(2, 'physics');
stud.addGrade(5, 'algebra');
stud.addGrade('отлично', 'algebra');
console.log(stud);
console.log ( stud.getAverageBy('algebra'));

let test = new StudentLog( 'Tester' );
stud.getTotalAverage();
stud.getGradesBySubject( 'physics' );
stud.getGrades();



class Weapon
{
  constructor( options = {}) {
    const { name, attack, durability, range } = options;
    Object.assign( this, {
      name,
      attack,
      durability,
      baseDurability: durability,
      range
    });
  }
  takeDamage( damage ) {
    this.durability = Math.max( 0, this.durability - damage );
  }
  getDamage( damage ) {
    const { baseDurability, durability } = this;
    if ( durability >= baseDurability * 0.3 ) {
      return this.attack;
    }
    if ( durability > 0 ) {
      return this.attack / 2;
    }
    return 0;
  }
  isBroken() {
    return this.durability === 0;
  }
}

  class Arm extends Weapon
  {
    constructor( name = 'Рука', attack = 1, durability = Infinity, range = 1 ) {
      super({ name, attack, durability, range });
    }
  }
  class Knife extends Weapon
  {
    constructor( name = 'Нож', attack = 5, durability = 300, range = 1 ) {
      super({ name, attack, durability, range });
    }
  }
  class Sword extends Weapon
  {
    constructor( name = 'Меч', attack = 25, durability = 500, range = 1 ) {
      super({ name, attack, durability, range });
    }
  }
  class Bow extends Weapon
  {
    constructor( name = 'Лук', attack = 10, durability = 200, range = 3 ) {
      super({ name, attack, durability, range });
    }
  }
  class Staff extends Weapon
  {
    constructor( name = 'Посох', attack = 8, durability = 200, range = 2 ) {
      super({ name, attack, durability, range });
    }
  }
  class LongBow extends Bow 
  {
    constructor( name = 'Длинный лук', attack = 15, durability, range = 4) {
      super(name, attack, durability, range);
    }
  }
  class Axe extends Sword 
  {
    constructor( name = 'Секира', attack = 27, durability = 800, range) {
      super(name, attack, durability, range);
    }
  }
  class StormStaff extends Staff 
  {
    constructor( name = 'Посох Бури', attack = 10, durability, range = 3) {
      super(name, attack, durability, range);
    }
  }

class Player
{
  constructor( options = {}) {
    const {
      life = 100,
      magic = 50,
      speed = 1,
      attack = 10,
      agility = 15,
      luck = 10,
      description = 'Игрок',
      weapon = new Arm(),
      name,
      position = 0
    } = options;
    Object.assign( this, {
      life,
      baseLife: life,
      magic,
      baseMagic: magic,
      speed,
      attack,
      agility,
      luck,
      description,
      weapon,
      name,
      position
    });
  }
  isDead() {
    return this.life <= 0;
  }
  getLuck() {
    return ( Math.random() * 101 + this.luck ) / 100;
  }
  getDamage( distance ) {
    if ( distance > this.weapon.range ) {
      return 0;
    }
    return ( this.attack + this.weapon.getDamage()) *  this.getLuck() / distance;
  }
  takeDamage( damage ) {
    this.life = Math.max( 0, this.life - damage );
  }
  moveLeft( distance = 1 ) {
    this.position -= Math.min( distance, this.speed );
  }
  moveRight( distance = 1 ) {
    this.position += Math.min( distance, this.speed );
  }
  move( distance ) {
    if ( distance > 0 ) {
      return this.moveRight( distance );
    }
    this.moveLeft( -distance );
  }
  isAttackBlocked() {
    return this.getLuck() > ( 100 - this.luck ) / 100;
  }
  dodged() {
    return this.getLuck() > ( 100 - this.agility - this.speed * 3 ) / 100;
  }
  takeAttack( damage ) {
    if ( this.isAttackBlocked()) {
      return this.weapon.takeDamage( damage );
    }
    if ( this.dodged()) {
      return;
    }
    this.takeDamage( damage );
  }
  checkWeapon() {
    if ( !this.weapon.isBroken()) {
      return;
    }
    if ( this.weapon.constructor instanceof Knife ) {
      this.weapon = new Arm();
      console.log( 'Дерусь голыми руками' );
      return;
    }
    this.weapon = new Knife();
    console.log( 'Взял нож' );
  }
  tryAttack( enemy ) {
    let distance = Math.abs( this.position - enemy.position );
    if ( distance > this.weapon.range ) {
      return;
    }
    this.checkWeapon();
    this.weapon.takeDamage( 10 * this.getLuck());
    
    const samePosition = this.position === enemy.position
    if ( samePosition ) {
      enemy.moveRight();
      distance = 1;
    }
    const damage = this.getDamage( distance ),
      k = samePosition ? 2 : 1 ;
    
    enemy.takeAttack( damage * k );
  }
  chooseEnemy( players = []) {
    return players
      .filter( player => player !== this && player.life > 0 )
      .sort(( e1, e2 ) => e2.life - e1.life )[ 0 ];
  }
  moveToEnemy( enemy ) {
    const dPos = enemy.position - this.position,
      distance = Math.abs( dPos );
    if ( distance <= 1 ) {
      return;
    }
    this.move( dPos );
  }
  turn( players ) {
    const enemy = this.chooseEnemy( players );
    if ( !enemy ) {
      return;
    }
    this.moveToEnemy( enemy );
    this.tryAttack( enemy );
    return enemy;
  }
}
  class Warrior extends Player
  {
    constructor( options = {}) {
      Object.assign( options, {
        life: 120,
        speed: 2,
        attack: 10,
        description: 'Воин',
        weapon: new Sword()
      });
      super( options );
    }
    takeDamage( damage ) {
      const { baseLife, life, magic } = this;
      if ( life / baseLife < 0.5 && this.getLuck() > 0.8 && magic > damage ) {
        this.magic -= damage;
        return;
      }
      super.takeDamage( damage );
    }
  }
  class Archer extends Player 
  {
    constructor( options = {}) {
      Object.assign( options, {
        life: 80,
        magic: 35,
        attack: 5,
        agility: 10,
        description: 'Лучник',
        weapon: new Bow()
      });
      super( options );
    }
    getDamage( distance ) {
      return ( this.attack + this.weapon.getDamage()) * this.getLuck() * distance / this.weapon.range;
    }
  }
  class Mage extends Player 
  {
    constructor( options = {}) {
      Object.assign( options, {
        life: 70,
        magic: 100,
        attack: 5,
        agility: 8,
        description: 'Маг',
        weapon: new Staff()
      });
      super( options );
    }
    takeDamage( damage ) {
      const { baseMagic, magic } = this;
      if ( magic / baseMagic > 0.5 ) {
        super.takeDamage( damage / 2 );
        this.magic -= 12;
        return;
      }
      super.takeDamage( damage );
    }
  }
  class Dwarf extends Warrior 
  {
    constructor( options = {} ) {
      super( options );
      this.life = 130;
      this.baseLife = this.life;
      this.attack = 15;
      this.luck = 20;
      this.description = 'Гном';
      this.weapon = new Axe();
      this.takeDamageCounter = 0;
    }
    takeDamage( damage ) {
      this.takeDamageCounter++;
      if (this.takeDamageCounter = 6 && this.getLuck() > 0.5 ) {
        this.takeDamageCounter = 0;
        super.takeDamage( damage / 2);
        return;
      }
      super.takeDamage( damage );
    }
  }
  class Crossbowman extends Archer 
  {
    constructor( options = {} ) {
      super( options );
      this.life = 85;
      this.baseLife = this.life;
      this.attack = 8;
      this.agility = 20;
      this.luck = 15;
      this.description = 'Арбалетчик';
      this.weapon = new LongBow();
    }
  }
  class Demiurge extends Mage 
  {
    constructor( options = {} ) {
      super( options );
      this.life = 80;
      this.baseLife = this.life;
      this.magic = 120;
      this.baseMagic = this.magic;
      this.attack = 6;
      this.luck = 12;
      this.description = 'Демиург';
      this.weapon = new StormStaff();
    }
    getDamage( distance ) {
      if ( this.baseMagic > 0 && this.getLuck() > 0.6 ) {
        return super.getDamage( distance ) * 1.5;
      }
      return super.getDamage( distance );
    }
  }

const play = players => {
  let turn = 1;
  while( players.length > 1 ) {
    console.log( `\n\nХод ${turn++}\nСводная информация` );
    for ( let i = 0, len = players.length; i < len; i++) {
      const player = players[ i ];
      console.log(`Игрок ${i} (pos ${player.position}): ${player.life.toFixed(2)}/${player.magic.toFixed(2)}`);
      console.log(`Ходит игрок ${i}`);
      player.turn( players );
      if ( players[ i ].isDead()) {
        console.log( `\nИгрок ${i} погиб:`, players[ i ]);
        delete players[ i ];
      }
    }
    console.log();
    players = players.filter( p => p );
  }
  const winner = players.pop();
  console.log( '\n\nПобедитель:', winner );
};

play([
  new Warrior({ position: 10, name: 'Conan' }), 
  new Dwarf({ position: 12, name: 'Gimly' }),
  new Mage({ position: 0, name: 'Gendalf' }),
  new Crossbowman({ position: 20, name: 'Legolas' }),
  new Archer({ position: 25, name: 'Boromir' }),
  new Demiurge({ position: 15, name: 'Galadriel' }),
]);