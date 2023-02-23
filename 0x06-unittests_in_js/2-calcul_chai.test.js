const { expect } = require("chai")
const calculateNumber = require("./2-calcul_chai.js")
describe("calculateNumer", function () {
        it("calculateNumber('SUM', 1.4, 4.5)", function () {
                expect(calculateNumber("SUM", 1.4, 4.5)).to.eql(6)
        })
        it("calculateNumber('SUBTRACT', 1.4, 4.5)", function () {
                expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.eql(-4)
        })
        it("calculateNumber('DIVIDE', 1.4, 4.5)", function () {
                expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.eql(0.2)
        })
        it("calculateNumber('DIVIDE', 1.4, 0)", function () {
                expect(calculateNumber("DIVIDE", 1.4, 0)).to.eql("Error")
        })
})