
const calculateNumber = require("./0-calcul")
const assert = require("assert")

it("calculateNumber", function () {
        assert.equal(calculateNumber(4, 5), 9)

        assert.equal(calculateNumber(1, 3.7), 5)
        assert.equal(calculateNumber(1.5, 3.7), 6)
})
