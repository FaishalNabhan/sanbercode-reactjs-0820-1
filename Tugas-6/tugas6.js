// Soal 1

console.log("-----SOAL 1-----")
const phi = 22/7

{let luasLingkaran = (radius) => {return phi * radius * radius}

console.log("Luas Lingkaran :")
console.log(luasLingkaran(7))
};

{let kelilingLingkaran = (radius) => {return phi * radius * 2}

console.log("Keliling Lingkaran :")
console.log(kelilingLingkaran(7))
};

// Soal 2

let kata1 = 'saya'
let kata2 = 'adalah'
let kata3 = 'seorang'
let kata4 = 'frontend'
let kata5 = 'developer'

let kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`

console.log('-----SOAL 2-----')
console.log(kalimat);

// Soal 3

console.log('-----SOAL 3-----')
const newFunction = ((firstName, lastName) => {
    obj = {firstName, lastName,
            fullName: function (){
                console.log(`${firstName} ${lastName}`)
                return
        }
    }
})

newFunction("William", "Imoh").fullName()


console.log(kalimat)

// Soal 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
  
  const {firstName, lastName, destination, occupation, spell} = newObject
  
  console.log("-----SOAL 4-----");
  console.log(firstName, lastName, destination, occupation);

  // Soal 5

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combined = [...west, ...east]
console.log("-----SOAL 5-----")
console.log(combined);