var expect = require('chai').expect;
var NuPack = require('../index.js').NuPack;

describe('Example 1', function () {

    it('Should return $1591.58', function () {

        var example = new NuPack();

        example.setBaseCost(1299.99);
        example.setNumberOfPeople(3);
        example.setTypeOfProduct("food");

        expect(example.getFinalCost()).equal(1591.58);
    });
});

describe('Example 2', function () {

    it('Should return $6199.81', function () {

        var example = new NuPack();

        example.setBaseCost(5432.00);
        example.setNumberOfPeople(1);
        example.setTypeOfProduct("drugs");

        expect(example.getFinalCost()).equal(6199.81);
    });
});

describe('Example 3', function () {

    it('Should return $13707.63', function () {

        var example = new NuPack();

        example.setBaseCost(12456.95);
        example.setNumberOfPeople(4);
        example.setTypeOfProduct("books");

        expect(example.getFinalCost()).equal(13707.63);
    });
});
