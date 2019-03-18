//------------task_2---------------
class Weapon {
  constructor ({name, attack, durability, range}) {
    {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    }
  }

  takeDamage( damage ) {
    if (damage) {
      let _durability = this.durability - damage;
      
      if(_durability <= 0) {
        _durability = 0;
        console.log(this.name + ' сломан!');
      }
      return this.durability = _durability;
    }
  }

  getDamage() {
    let weaponCondition = this.durability * 0.3; //30% of durability
    if (this.durability >= weaponCondition || this.durability == Infinity) {
      return this.attack;
    } else if (this.durability < weaponCondition && this.durability > 0) {
      return this.attack / 2; 
    } else {
      return 0;
    }
  }

  isBroken() {
    if (this.durability == 0) {
      return true;
    }
  }
}

//-----------regular_weapon---------
class Arm extends Weapon {}
class Bow extends Weapon {}
class Sword extends Weapon {}
class Knife extends Weapon {}
class Staff extends Weapon {}

//-----------increased_weapon-------
class LongBow extends Bow {
  constructor (name, attack, durability, range) {
    super(name, attack, durability, range);
    this.durability = bow.durability;
  }
}
class Axe extends Sword {
  constructor (name, attack, durability, range) {
    super(name, attack, durability, range);
    this.range = sword.range;
  }
}
class StormStaff extends Staff {
  constructor (name, attack, durability, range) {
    super(name, attack, durability, range);
    this.durability = staff.durability;
  }
}

//-----------Armory----------------
var arm = new Arm ({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1
});
var bow = new Bow ({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3
});
var sword = new Sword ({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1
});
var knife = new Knife ({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1
});
var staff = new Staff ({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2
});
//-----------prestige_wearpon--------
var longBow = new LongBow ({
  name: 'Длинный лук',
  attack: 15,
  range: 4
});
var axe = new Axe ({
  name: 'Секира',
  attack: 27,
  durability: 800,
});
var stormStaf = new StormStaff ({
  name: 'Посох Бури',
  attack: 10,
  range: 3
});
//-----------Player----------------
class Player {
  constructor ({
    life, magic, speed, attack, agility, luck, description, weapon, name
  }) {
    this.life = life;
    this.magic = magic;
    this.speed = speed;
    this.attack = attack;
    this.agility = agility;
    this.luck = luck;
    this.description = description;
    this.weapon = weapon;
    this.name = name;
  }

  getluck() {
    let randomNumber = Math.random() * 100;
    return (randomNumber + this.luck) / 100;
  }

  getDamage( distance ) {
    if ( distance <= this.weapon.range) {
      console.log('Hit!');
      return ( this.attack + this.weapon.getDamage() ) * this.getluck() / distance;
    } else {
      console.log('It`s too far!');
      return 0;
    }   
  }

  takeDamage( damage ) {
    let _life = this.life - damage;
    if ( _life <= 0 ) {
      _life = 0;
      console.log( `${this.name} is dead...` );
    }
    return this.life = _life;    
  }

  isDead() {
    if ( this.life <= 0 ) {
      return true;
    } else {
        return false;
    }
  }
}

var player = new Player ({
  life: 100,
  magic: 20,
  speed: 1,
  attack: 10,
  agility: 5,
  luck: 10,
  description: 'Игрок',
  weapon: new Arm ({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1
  }),
  name: 'Mengadavinosander'
});
//-----------regular_classes--------
class Warior extends Player {
  constructor ({ life, magic, speed, attack, agility, luck, description, weapon, name }) {
    super({ life, magic, speed, attack, agility, luck, description, weapon, name });
      this.magic = player.magic;
      this.agility = player.agility;
      this.luck = player.luck;
      //this.name = player.name;    //not shure... check later
      //primaryWeapon
  }
  takeDamage( damage ) {
   let _life = this.life - damage;
    if ( _life < (this.life * 0.5) && this.getluck() > 0.8) {
      let _magic = this.magic - damage;
      if ( _magic <= 0 ) {        
        _life = this.life - damage;
        return this.life = _life;
      }
      return this.magic = _magic;
    } else if ( _life <= 0 ) {
      _life = 0;
      console.log ('Dead!');
    }
    return this.life = _life;
  } 
}
class Archer extends Player {
  constructor ({ life, magic, speed, attack, agility, luck, description, weapon, name }) {
    super({ life, magic, speed, attack, agility, luck, description, weapon, name });
    this.speed = player.speed;
    this.luck = player.luck;
    //primaryWeapon
  }
  getDamage( distance ) {
      if ( distance <= this.weapon.range) {
      console.log('Hit!');
      return ( this.attack + this.weapon.getDamage() ) * this.getluck() * distance / this.weapon.range;
    } else {
      console.log('It`s too far!');
      return 0;
    } 
  }
}
class Mage extends Player {
  constructor ({ life, magic, speed, attack, agility, luck, description, weapon, name }) {
    super({ life, magic, speed, attack, agility, luck, description, weapon, name });
    this.speed = player.speed;
    this.luck = player.luck;
    //primaryWeapon
  }
  takeDamage ( damage ) {
    let magicShieldCost = 12;
    if ( this.magic > (this.magic * 0.5) ) {
      let _magic = this.magic - magicShieldCost;
      this.magic = _magic;
      return damage / 1.5;
    } 
    console.log (damage);
    //--------------------------
    let _life = this.life - damage;
    if ( _life <= 0 ) {
      _life = 0;
      console.log( `${this.name} is dead...` );
    }
    return this.life = _life; 
  }
}
//-----------prestige_classes-------
class Dwarf extends Warior {
  constructor ({ life, magic, speed, attack, agility, luck, description, weapon, name }) {
    super({ life, magic, speed, attack, agility, luck, description, weapon, name });
    this.magic = player.magic;
    this.speed = player.speed;
    this.agility = player.agility;
    //primaryWeapon
  }
}
class Crossbowman extends Archer {
  constructor ({ life, magic, speed, attack, agility, luck, description, weapon, name }) {
    super({ life, magic, speed, attack, agility, luck, description, weapon, name });
    this.magic = player.magic;
    this.speed = player.speed;
    //primaryWeapon
  }
}
class Demiurge extends Mage {
  constructor ({ life, magic, speed, attack, agility, luck, description, weapon, name }) {
    super({ life, magic, speed, attack, agility, luck, description, weapon, name });
    this.speed = player.speed;
    this.agility = player.agility;
    //primaryWeapon
  }
}
//-----------regular_units----------
var warior = new Warior ({
  life: 120,
  speed: 2,
  attack: 10,
  description: 'Воин',
  weapon: new Sword({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1    
  })
});
var archer = new Archer ({
  life: 80,
  magic: 35,
  attack: 5,
  agility: 10,
  description: 'Лучник',
  weapon: new Bow({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3  
  })
});
var mage = new Mage ({
  life: 70,
  magic: 100,
  attack: 5,
  agility: 8,
  description: 'Маг',
  weapon: new Staff({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2 
  })
});
//-----------elite_units------------
var dwarf = new Dwarf ({
  life: 130,
  attack: 15,
  luck: 20,       //dont work!
  description: 'Гном',
  weapon: new Axe ({
    name: 'Секира',
    attack: 27,
    durability: 800,
  })
});
var crossbowman = new Crossbowman ({
  life: 85,
  attack: 8,
  agility: 20,
  luck: 15,       //dont work!
  description: 'Арбалетчик',
  weapon: new LongBow ({      
    //а вот за каким хреном у арбалетчика вдруг появился ростовой лук 
    //я никогда не пойму, хоту убейте ^_^
    name: 'Длинный лук',
    attack: 15,
    range: 4
  }) 
}); 
var demiurge = new Demiurge ({
  life: 80,
  magic: 120,
  attack: 6,
  luck: 12,       //dont work!
  description: 'Демиург',
  weapon: new StormStaff ({      
    name: 'Посох Бури',
    attack: 10,
    range: 3
  }) 
}); 