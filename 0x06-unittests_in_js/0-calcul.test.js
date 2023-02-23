
const calculateNumber = require("./0-calcul")
const assert = require("assert")

describe("calculateNuber", () => {
        it("", function () {
                assert.equal(calculateNumber(4, 5), 9)
        })
        it("", function () {
                assert.equal(calculateNumber(4.3, 5.4), 9)
        })
        it("", function () {
                assert.equal(calculateNumber(4.5, 5.5), 11)
        })
        it("", function () {
                assert.equal(calculateNumber(-4, -9), -13)
        })
})
