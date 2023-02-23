const assert = require("assert")
const calculateNumber = require("./1-calcul")
describe("calculateNumer", function () {
        it("calculateNumber('SUM', 1.4, 4.5)", function () {
                assert.equal(calculateNumber("SUM", 1.4, 4.5), 6)
        })
        it("calculateNumber('SUBTRACT', 1.4, 4.5)", function () {
                assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4)
        })
        it("calculateNumber('DIVIDE', 1.4, 4.5)", function () {
                assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2)
        })
        it("calculateNumber('DIVIDE', 1.4, 0)", function () {
                assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error")
        })
})