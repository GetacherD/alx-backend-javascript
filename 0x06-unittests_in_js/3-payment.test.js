const sinon = require("sinon")
const Utils = require("./utils")
const assert = require("assert")
describe("Spy", function () {
        let sendPaymentRequestToApi = sinon.spy(Utils, "calculateNumber");
        it("assert value", function () {


                const res = Utils.calculateNumber("SUM", 4, 6)
                assert.equal(res, 10);

        })
        it("", function () {


                const res = Utils.calculateNumber("SUM", 4, 6)
                assert.equal(res, 10);
        })
})

