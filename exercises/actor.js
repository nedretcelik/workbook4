let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];



// Who is the Academy Member whose ID is 187?
function findIdOfAcademyMember(academyMembersArray) {
    for(let i =0; i<academyMembersArray.length; i++) {
        if(academyMembersArray[i].memID == "187") {
            console.log(`${academyMembersArray[i].name} has ID 187`)
        }
    }

}
findIdOfAcademyMember(academyMembers);


// Who has have been in at least 3 films?

function findNameforMovie(academyMembersArray) {
    for(let i =0; i<academyMembersArray.length; i++) {
        if(academyMembersArray[i].films.length == 3) {
            console.log(`${academyMembersArray[i].name} has been at least 3 films`)
        }
    }

}
findNameforMovie(academyMembers)


// Who has a name that starts with "Bob"?
function findNameStartsBob(academyMembersArray) {
    for(let i =0; i<academyMembersArray.length; i++) {
        if(academyMembersArray[i].name.startsWith("Bob")) {
            console.log(`${academyMembersArray[i].name}  has a name that starts with "Bob"`)
        }
    }

}

findNameStartsBob(academyMembers)

// HARDER: Which Academy Members have been in a film
// that starts with "A"


function findNameStartsWithA(academyMembersArray) {
    let membersWithA = [];
    for(let i = 0; i < academyMembersArray.length; i++) {
        for(let j = 0; j < academyMembersArray[i].films.length; j++) {
            if(academyMembersArray[i].films[j].startsWith("A")) {
                membersWithA.push(academyMembersArray[i]);
            }
        }
    }
    console.log(membersWithA)
}

findNameStartsWithA(academyMembers)