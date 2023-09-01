const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight =(name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer =(name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 15,
        defense: 3
    }
}

const createLittleMonster =(name) => {
    return {
        ...defaultCharacter,
        name: 'LittleMonster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 5
    }
}

const createBigMonster =(name) => {
    return {
        ...defaultCharacter,
        name: 'BigMonster',
        life: 100,
        maxLife: 100,
        attack: 16,
        defense: 4
    }
}