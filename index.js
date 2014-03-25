(function (root) {
    'use strict';

    var NuPack = function () {

        // Private variables
        var baseCost = 0;
        var numberOfpeople = 0;
        var typeOfProduct = '';

        // Public methods
        this.setBaseCost = function (cost) {
            baseCost = cost;
        };

        this.setNumberOfPeople = function (people) {
            numberOfpeople = people;
        };

        this.setTypeOfProduct = function (product) {
            typeOfProduct = product;
        };

        this.getFinalCost = function () {

            var cost, markups = 0;

            // Base flat markup of 5%
            cost = baseCost * 1.05;

            // 1.2% markup per person
            markups = 0.012 * numberOfpeople;

            // add type of product markup
            markups += calculateTypeMarkup();

            // Add 100% to sum markups to the cost
            markups += 1;

            // Calculate final cost
            cost *= markups;

            // Round cost
            cost = Math.round(cost * 100) / 100;

            return cost;
        };

        function calculateTypeMarkup() {

            var markups = {
                'drugs': 0.075,
                'food': 0.13,
                'electronics': 0.02
            };

            if (markups[typeOfProduct]) {
                return markups[typeOfProduct];
            } else {
                return 0;
            }
        }
    };

    root.NuPack = NuPack;

}(this));
