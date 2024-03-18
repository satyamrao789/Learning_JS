console.log("Array of objects");
let entryDetails = [
    {
        name : "Rajat",
        age : 23,
        bank : "ICICI"
    },
    {
        name : "Rajveer",
        age : 25,
        bank : "HDFC"
    },
    {
        name : "Shobit",
        age : 29,
        bank : "Axis"
    },
    {
        name : "Rakesh",
        age : 29,
        bank : "Axis",
        vehicleDetails : [
            {
                vehicle : "Hero Honda",
                purchased_year : 2024,
                downPayment : 45000
            },
            {
                vehicle : "Activa",
                purchased_year : 2016,
                downPayment : 23000
            },
        ]
    },
]

console.log(entryDetails);
console.log(entryDetails[2]);
console.log(entryDetails[3].vehicleDetails[1].purchased_year);

