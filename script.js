const char = createKnight('Fulano Knight');
console.log(char.name);
console.log(char.attack);
console.log(char.defense);
console.log(char.life);
console.log(char.maxLife);

console.log('------------------------------------------------------')

// const sorcerer = createSorcerer('Sicrano Sorcerer');
// console.log(sorcerer.name);
// console.log(sorcerer.attack);
// console.log(sorcerer.defense);
// console.log(sorcerer.life);
// console.log(sorcerer.maxLife);

// console.log('------------------------------------------------------')

const monster = createLittleMonster();
console.log(monster.name);
console.log(monster.attack);
console.log(monster.defense);
console.log(monster.life);
console.log(monster.maxLife);

// console.log('------------------------------------------------------')

// const bigMonster = createBigMonster();
// console.log(bigMonster.name);
// console.log(bigMonster.attack);
// console.log(bigMonster.defense);
// console.log(bigMonster.life);
// console.log(bigMonster.maxLife);

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)