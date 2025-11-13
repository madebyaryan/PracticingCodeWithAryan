"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums are uses to restrict users options/choices:
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 20] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 30] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
