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

        this.getBaseCost = function () {
            return baseCost;
        };

        this.setNumberOfPeople = function (people) {
            numberOfpeople = people;
        };

        this.getNumberOfPeople = function () {
            return numberOfpeople;
        };

        this.setTypeOfProduct = function (product) {
            typeOfProduct = product;
        };

        this.getTypeOfProduct = function () {
            return typeOfProduct;
        };

        this.getFinalCost = function () {

            var cost, markups = 0;

            // Base flat markup of 5%
            cost = this.getBaseCost() * 1.05;

            // 1.2% markup per person
            markups = 0.012 * this.getNumberOfPeople();

            // add type of product markup
            markups += calculateTypeMarkup.apply(this);

            // Add 100% to sum markups to the cost
            markups += 1;

            // Calculate final cost
            cost *= markups;

            // Round cost to 2 decimals
            cost = Math.round(cost * 100) / 100;

            return cost;
        };

        function calculateTypeMarkup() {

            // List of types of products and their markups
            var markups = {
                'drugs': 0.075,
                'food': 0.13,
                'electronics': 0.02
            };

            var product = this.getTypeOfProduct();

            if (markups.hasOwnProperty(product)) {
                return markups[product];
            } else {
                return 0;
            }
        }
    };

    root.NuPack = NuPack;

}(this));
