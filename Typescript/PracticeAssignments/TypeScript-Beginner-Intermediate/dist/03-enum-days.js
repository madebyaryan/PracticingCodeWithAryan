/* Create an enum for the days of the week and another enum for order statuses (Pending, Processing, Shipped, Delivered).
Write a function that takes a day and an order status, then returns a message about when the order will arrive.
Use numeric enums for the days and string enums for the order statuses to see the difference.
Create a function that estimates delivery time based on which day of the week an order is placed and its current status.
Practice accessing enum values both by name and by value to understand how enums work in TypeScript. */
var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek[daysOfTheWeek["Monday"] = 0] = "Monday";
    daysOfTheWeek[daysOfTheWeek["Tuesday"] = 1] = "Tuesday";
    daysOfTheWeek[daysOfTheWeek["Wednesday"] = 2] = "Wednesday";
    daysOfTheWeek[daysOfTheWeek["Thursday"] = 3] = "Thursday";
    daysOfTheWeek[daysOfTheWeek["Friday"] = 4] = "Friday";
    daysOfTheWeek[daysOfTheWeek["Saturday"] = 5] = "Saturday";
    daysOfTheWeek[daysOfTheWeek["Sunday"] = 6] = "Sunday";
})(daysOfTheWeek || (daysOfTheWeek = {}));
var orderStatuses;
(function (orderStatuses) {
    orderStatuses["Pending"] = "Pending";
    orderStatuses["Processing"] = "Processing";
    orderStatuses["Shipped"] = "Shipped";
    orderStatuses["Delivered"] = "Delivered";
})(orderStatuses || (orderStatuses = {}));
function arrivalDate(day, orderStatus) {
    let deliveryDays;
    switch (orderStatus) {
        case orderStatuses.Pending:
            deliveryDays = 5;
            break;
        case orderStatuses.Processing:
            deliveryDays = 3;
            break;
        case orderStatuses.Shipped:
            deliveryDays = 2;
            break;
        case orderStatuses.Delivered:
            deliveryDays = 0;
            break;
        default:
            deliveryDays = 0;
    }
    // -1 and +1 if the week started from (1-7) instead of (0-6)
    // let arrivalDay = (day + deliveryDays - 1) % 7 + 1;
    let arrivalDay = (day + deliveryDays) % 7;
    let arrivalDayName = daysOfTheWeek[arrivalDay];
    return `Order Status: ${orderStatus}. Estimated Arrival: ${arrivalDayName}, in ${deliveryDays} days.`;
}
console.log(arrivalDate(daysOfTheWeek.Monday, orderStatuses.Pending));
console.log(arrivalDate(daysOfTheWeek.Friday, orderStatuses.Processing));
export {};
//# sourceMappingURL=03-enum-days.js.map