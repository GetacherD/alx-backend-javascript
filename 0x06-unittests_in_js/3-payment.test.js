const sinon = require("sinon")
const Utils = require("./utils")
const assert = require("assert")
describe("Spy", function () {
        const sendPaymentRequestToApi = sinon.createSandbox();

        beforeEach(function () {
                sendPaymentRequestToApi.spy(Utils, "calculateNumber");
        });

        afterEach(function () {
                sendPaymentRequestToApi.restore();
        });

        it("assert value", function () {


                const res = Utils.calculateNumber("SUM", 4, 6)
                assert.equal(res, 10);

        })
        it("assert called", function () {


                const res = Utils.calculateNumber("SUM", 4, 6)
                assert.equal(res, 10);
                assert(sendPaymentRequestToApi.assert.calledOnce)
        })
})

