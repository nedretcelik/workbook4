let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// Which vehicles are RED?

function findRedVehicle(vehiclesArray) {
    for(let i=0; i<vehiclesArray.length; i++ ) {
        if(vehiclesArray[i].color == "Red") {
            console.log(vehiclesArray[i].type)
        }
    }
}

findRedVehicle(vehicles)
// Which vehicles have registrations that are expired?
let expiredVehicles = [];
let currentDate = new Date()
function findExpiredVehicles(vehiclesArray) {
    for(let i=0; i<vehiclesArray.length; i++ ) {
        if(vehiclesArray[i].registrationExpires < currentDate) {
            expiredVehicles.push(vehiclesArray[i])
        }
    }
}

findExpiredVehicles(vehicles)
console.log(expiredVehicles)



// Which vehicles that hold at least 6 people?

function findVehicleCapasity(vehiclesArray) {
    for(let i=0; i<vehiclesArray.length; i++ ) {
        if(vehiclesArray[i].capacity >= 6) {
            console.log(vehiclesArray[i].type)
        }
    }
}

findVehicleCapasity(vehicles)

// Which vehicles have license plates that end with "222"?


function findVehiclelicence222(vehiclesArray) {
    for(let i=0; i<vehiclesArray.length; i++ ) {
        if(vehiclesArray[i].licenseNo.endsWith("222")) {

            console.log("ends 222" + vehiclesArray[i].type)
        }
    }
}

findVehiclelicence222(vehicles)
