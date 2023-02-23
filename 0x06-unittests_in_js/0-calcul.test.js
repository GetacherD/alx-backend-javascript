
const calculateNumber = require("./0-calcul")
const assert = require("assert")
describe("Add", function () {
        describe("Add two Numbers", function () {
                it("Adds Two numbers and return the result", function () {
                        assert.equal(calculateNumber(4, 5), 9)
                        assert.equal(calculateNumber("l", 5), "l5")
                        assert.equal(calculateNumber(1, 3.7), 4.7)
                        assert.equal(calculateNumber(1.5, 3.7), 5.2)
                })
        })
})