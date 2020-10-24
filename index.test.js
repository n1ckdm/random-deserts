const rd = require('./index');

it('Makes sure all dessert names are unique', () => {
    const all = rd.desserts;
    const allSet = new Set(all);

    expect(all.length).toBe(allSet.size);
});

it('Makes sure all dessert emojis are unique', () => {

    const all = rd.emojis;
    const allSet = new Set(all);

    expect(all.length).toBe(allSet.size);
});

it('gets a random desert', () => {

    const test = (func) => {
        const dessert = func();
        expect(rd.desserts).toContain(dessert);
    };

    for (let index = 0; index < 100; index++) {
        test(rd.getRandomDessertsName);
        test(rd.getRandomDessert);
        test(rd.roll);
    }
});

it('gets a random desert as an emoji', () => {

    const test = (func) => {
        const dessert = func(true);
        expect(rd.emojis).toContain(dessert);
    };

    for (let index = 0; index < 100; index++) {
        test(rd.getRandomDessertsName);
        test(rd.getRandomDessert);
        test(rd.roll);
    }
});

it('gets three unique deserts at once', () => {

    const allThree = rd.rollThree();
    const allThreeSet = new Set(allThree);

    expect(allThree.length).toBe(3);
    expect(allThreeSet.size).toBe(3);

    allThree.forEach(dessert => {
        expect(rd.desserts).toContain(dessert);
    });
});

it('gets N unique deserts at once', () => {

    const all = rd.rollN(20);
    const allSet = new Set(all);

    expect(all.length).toBe(20);
    expect(allSet.size).toBe(20);

    all.forEach(dessert => {
        expect(rd.desserts).toContain(dessert);
    });
});

it('checks emojis work', () => {
    expect(rd.data.AngelCake).toBe('😇+🍰');
});

it('should fail', () => {
    const check = () => rd.rollN(rd.desserts.length + 1);
    expect(check).toThrow(RangeError);
});

it('test game', () => {
    const em = rd.data.Brownie;
    console.log(em);
    expect(rd.check(em, 'Brownie')).toBeTruthy();
});