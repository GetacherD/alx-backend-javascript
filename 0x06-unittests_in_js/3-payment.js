const Utils = require("./utils")
const sendPaymentRequestToApi = function (totalAmount, totalShipping) {
        console.log(`The total is: ${Utils.calculateNumber("SUM", totalAmount, totalShipping)}`)

}