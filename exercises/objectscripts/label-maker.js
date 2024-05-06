"use strict";


let myInfo = {
    name: "Nedret Haque",
    address: "23 Gracel St",
    city: "Bloomfield",
    state: "New Jersey",
    zip: "07003"
};


function printContact(myInfo) {
    console.log(`${myInfo.name}`);
    console.log(`${myInfo.address}`);
    console.log(`${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
  
}


printContact(myInfo);

