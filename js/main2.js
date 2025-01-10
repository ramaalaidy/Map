function toKm(milesArray) {
    const kilometers = milesArray.map(miles => miles * 1.60934);

    const totalDistanceInKilometers = kilometers.reduce((total, km) => total + km, 0);

    return { kilometers, totalDistanceInKilometers };
}

const miles = [10, 20, 30, 40];

const result = toKm(miles);

console.log("Kilometers:", result.kilometers);
console.log("Total Distance in Kilometers:", result.totalDistanceInKilometers);
