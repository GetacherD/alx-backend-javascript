const sinon = require("sinon")
const Utils = require("./utils")
const assert = require("assert")
describe("Spy", function () {
        it("spy", function () {
                const sendPaymentRequestToApi = spyOn(Utils, "calculateNumber").and.returnValue(300)
                const res = Utils.calculateNumber("SUM", 4, 6)
                assert.equal(res, 300);
        })
})

