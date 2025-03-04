const cities = ['Noakhali', 'Dhaka', 'Rajshahi']

const country = {
    name: "Bangladesh",
    capital: "Dhaka"
}

for (city of cities) {
    // console.log(city)
    // console.log(cities[city])
}

for (prop in country) {
    console.log(prop)
    console.log(country[prop])
}