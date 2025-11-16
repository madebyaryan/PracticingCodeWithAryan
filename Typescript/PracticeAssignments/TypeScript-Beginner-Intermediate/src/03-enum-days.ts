/* Create an enum for the days of the week and another enum for order statuses (Pending, Processing, Shipped, Delivered). 
Write a function that takes a day and an order status, then returns a message about when the order will arrive. 
Use numeric enums for the days and string enums for the order statuses to see the difference. 
Create a function that estimates delivery time based on which day of the week an order is placed and its current status. 
Practice accessing enum values both by name and by value to understand how enums work in TypeScript. */

enum daysOfTheWeek {
    Monday = 0,
    Tuesday = 1,
    Wednesday = 2,
    Thursday = 3,
    Friday = 4,
    Saturday = 5,
    Sunday = 6
}

enum orderStatuses {
    Pending = "Pending", Processing = "Processing", Shipped = "Shipped", Delivered = "Delivered"
}

function arrivalDate(day: daysOfTheWeek, orderStatus: orderStatuses): string {
    let deliveryDays: number;

    switch (orderStatus) {
        case orderStatuses.Pending:
            deliveryDays = 5
            break;
        case orderStatuses.Processing:
            deliveryDays = 3
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

    return `Order Status: ${orderStatus}. Estimated Arrival: ${arrivalDayName}, in ${deliveryDays} days.`
}

console.log(arrivalDate(daysOfTheWeek.Monday, orderStatuses.Pending));
console.log(arrivalDate(daysOfTheWeek.Friday, orderStatuses.Processing));
