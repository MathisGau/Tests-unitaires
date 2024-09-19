require('@babel/register')({
    presets: ['@babel/preset-env'],
});

const Tamagocci = require('./tamagocci').default;

describe("Tamagocci", () => {

    let tamagocci;
    const initialWeight = 5;
    const initialHappiness = 5;
    const initialAge = 0;
    const initialMinWeight = 1;
    const initialMaxWeight = 10;
    const goodPicture = "pk_good.gif";
    const badPicture = "pk_bad.gif";
    const deadPicture = "pk_dead.gif";

    beforeEach(() => {
        tamagocci = new Tamagocci();
    });

    test("at birth, weight must be 5, minWeight 1, maxWeight 10, age 0 and happiness 5", () => {
        expect(tamagocci.weight).toBe(initialWeight);
        expect(tamagocci.happiness).toBe(initialHappiness);
        expect(tamagocci.age).toBe(initialAge);
        expect(tamagocci.minWeight).toBe(initialMinWeight);
        expect(tamagocci.maxWeight).toBe(initialMaxWeight);
    });

    test("when eat, weight must increase by 2", () => {
        tamagocci.eat();
        expect(tamagocci.weight).toBe(initialWeight + 2);
    });

    test("when play, weight must decrease by 1 and happiness increase by 1", () => {
        tamagocci.play();
        expect(tamagocci.weight).toBe(initialWeight - 1);
        expect(tamagocci.happiness).toBe(initialHappiness + 1);
    });

    test("when become older, age, min weight and max weight must increase by 1 and happiness must decrease by 1", () => {
        tamagocci.becomeOlder();
        expect(tamagocci.age).toBe(initialAge + 1);
        expect(tamagocci.minWeight).toBe(initialMinWeight + 1);
        expect(tamagocci.maxWeight).toBe(initialMaxWeight + 1);
        expect(tamagocci.happiness).toBe(initialHappiness - 1);
    });

    test("must die when weight gets lower than min weight", () => {
        tamagocci.weight = tamagocci.minWeight - 1;
        expect(tamagocci.isDead()).toBe(true);
    });

    test("must die when weight gets greater than max weight", () => {
        tamagocci.weight = tamagocci.maxWeight + 1;
        expect(tamagocci.isDead()).toBe(true);
    });

    test("must die when happiness falls to zero", () => {
        tamagocci.happiness = 0;
        expect(tamagocci.isDead()).toBe(true);
    });

    test("must not be dead when born", () => {
        expect(tamagocci.isDead()).toBe(false);
    });

    test("must not die when happiness equals 1", () => {
        tamagocci.happiness = 1;
        expect(tamagocci.isDead()).toBe(false);
    });

    test("must not die when weight equals max weight", () => {
        tamagocci.weight = tamagocci.maxWeight;
        expect(tamagocci.isDead()).toBe(false);
    });

    test("must not die when weight equals min weight", () => {
        tamagocci.weight = tamagocci.minWeight;
        expect(tamagocci.isDead()).toBe(false);
    });

    test("must return a happy picture after birth", () => {
        expect(tamagocci.getPicture()).toBe(goodPicture);
    });

    test("must return a bad picture when weight is less than 3 units after min weight", () => {
        tamagocci.weight = tamagocci.minWeight + 2;
        expect(tamagocci.getPicture()).toBe(badPicture);
    });

    test("must return a bad picture when weight is more than 3 units before max weight", () => {
        tamagocci.weight = tamagocci.maxWeight - 2;
        expect(tamagocci.getPicture()).toBe(badPicture);
    });

    test("must return a bad picture when happiness is lesser than 3", () => {
        tamagocci.happiness = 2;
        expect(tamagocci.getPicture()).toBe(badPicture);
    });

    test("must return a dead picture when is dead", () => {
        tamagocci.happiness = 0;
        expect(tamagocci.getPicture()).toBe(deadPicture);
    });

});
