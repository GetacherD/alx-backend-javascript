const sinon = require("sinon")
const Utils = require("./utils")
const assert = require("assert")
describe("Spy", function () {
        it("spy", function () {
                const sendPaymentRequestToApi = sinon.spy(Utils, "calculateNumber");
                sendPaymentRequestToApi.returnValues = [300]
                const res = Utils.calculateNumber("SUM", 4, 6)
                assert.equal(res, 10);
                sendPaymentRequestToApi.alwaysCalledWith("SUM", 4, 6)
        })
})

