const seedrandom = require('seedrandom');

const desserts = {
    AngelDelight: '😇+💕',
    AngelCake: '😇+🍰',
    Amandine: '🍫🍰',
    Bakewell: '🍒+🧁',
    Brownie: '🍫🟤y',
    Battenberg: '🦇+🧊',
    Cake: '🍰',
    Cupcake: '🧁',
    Cookie: '🍪',
    Doughnut: '🍩',
    EatonMess: '🍓+🍨',
    EcclesCake: '🥧+🍰',
    Fudge: '?',
    Financier: '💲-🍰',
    CarrotCake: '🥕-🍰',
    Gingerbread: '?-🍞',
    Fruitcake: '🍇🍎🥭+🍰',
    IceCream: '🍧',
    Gateau: '🎂',
    Genoise: '?',
    HummingbirdCake: '🎵+🐦+🍰',
    JaffaCake: '🍊+🍰',
    Kuchen: '?',
    Ladyfinger: '?',
    Lamington: '?',
    MaltLoaf: '?',
    Opera: '🎶',
    Panforte: '?',
    Panettone: '?',
    RockCake: '🗻+🍰',
    RumBaba: '?',
    Stollen: '?',
    SwissRoll: '?',
    Teacake: '☕+🍰',
    Torte: '?',
    Tiramisu: '☕+🥃+🍰',
    UpsideDownCake: '↕-🍰',
    YuleLog: '🎄-🍰',
    ZugerKirschtorte: '?'
};

const names = Object.keys(desserts).map(s => s.replace(/([A-Z])/g, ' $1').trim());
const emojis = Object.values(desserts);

const rollN = (N, emoji) => {
    const rng = seedrandom();

    const dataList = emoji ? emojis : names

    if (N > dataList.length) {
        throw new RangeError(`N must be less than ${dataList.length}`);
    }

    const res = [];
    let attempts = 0
    while(res.length < N) {
        attempts++;

        if (attempts > 500) {
            throw Error('Number of attempts exceeded, something went wrong')
        }

        const dessert = dataList[Math.ceil(rng() * dataList.length - 1)];
        if (res.includes(dessert)) {
            continue;
        }
        res.push(dessert);
    }

    if (N === 1) {
        return res[0];
    }
    return res
};

const check = (emoji, name) => {
    
    if (!emojis.includes(emoji)) {
        throw Error('This emoji doesnt exist')
    }
    
    if (!names.includes(name)) {
        return false;
    }

    return emojis.indexOf(emoji) === names.indexOf(name);
}

module.exports.data = desserts;
module.exports.emojis = emojis;
module.exports.desserts = names;
module.exports.getRandomDessertsName = (emoji) => rollN(1, emoji);
module.exports.getRandomDessert = (emoji) => rollN(1, emoji);
module.exports.roll = (emoji) => rollN(1, emoji);
module.exports.rollThree = (emoji) => rollN(3, emoji);
module.exports.rollN = rollN;
module.exports.check = (emoji, name) => check(emoji, name);