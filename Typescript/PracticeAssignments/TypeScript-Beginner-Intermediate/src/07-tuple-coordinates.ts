/* Use tuples to represent geographic coordinates (latitude, longitude) and RGB color values. 
Create an array of location tuples with city names. Write a function that takes a coordinate tuple and returns whether it's in the northern or southern hemisphere. 
Add another function that calculates the distance between two coordinate points using a simple formula. 
Create tuples that mix different types, such as [string, number, boolean] to represent a city name, population, and whether it's a capital. 
Practice accessing tuple elements by index and understand why tuples are useful when you need a fixed number of elements with specific types in specific positions. */

let coordinates: [number, number];
let rgbColors: [number, number, number];
let cities: string[] = ["Rotterdam", "Leiden", "Delft", "Amsterdam", "Den Haag"]

function hemisphereLocator(coordinates: [number, number]): string {
    const [latitude, longitude] = coordinates;
    if (latitude > 0) {
        return "Location is at Northern Hemisphere!"
    }
    else if (longitude < 0) {
        return "Location is at Southern Hemisphere!"
    }
    return "Location on the Equator!"
}

function calculateDistance(coord1: [number, number], coord2: [number, number]): number {
    const [lat1, long1] = coord1;
    const [lat2, long2] = coord2;

    const dlat = (lat2 - lat1) * Math.PI / 180;
    const dlon = (long2 - long1) * Math.PI / 180;

    const totalDistance = dlat * dlon;
    return totalDistance
}

let locationTuples: [string, number, number][] = [
    ["Rotterdam", 200.120, 198.292],
    ["Amsterdam", 123.444, 203.212],
    ["Den Haag", 928.124, 192.101]
]

let cityInfo: [string, number, boolean][] = [
    ["Rotterdam", 200.120, true],
    ["Amsterdam", 123.444, false],
    ["Den Haag", 928.124, true]
]

console.log(cityInfo[0]?.[0], locationTuples[1]?.[1])
console.log(cityInfo[1]?.[2], locationTuples[0]?.[2])
console.log(cityInfo[2]?.[1], locationTuples[1]?.[2])
