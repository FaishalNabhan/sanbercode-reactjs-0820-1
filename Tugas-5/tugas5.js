// soal 1

function halo() {
    return "Halo Sanbers!"
}

console.log("-----SOAL 1-----");
console.log(halo());

// soal 2

function kalikan (num1, num2) {
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log("-----SOAL 2-----");
console.log(hasilKali);

// soal 3

function introduce (name, age, address, hobby) {
    return "Nama saya " 
    + name
    + ", umur saya "
    + age
    + " tahun, alamat saya di "
    + address
    + ", dan saya punya hobby yaitu "
    + hobby 
    + "!" 
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby);
console.log("-----SOAL 3-----");
console.log(perkenalan);

// soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var daftarPesertaObj = {
nama: arrayDaftarPeserta[0],
"jenis kelamin": arrayDaftarPeserta[1],
hobi: arrayDaftarPeserta[2],
"tahun lahir": arrayDaftarPeserta[3]
}
console.log("-----SOAL 4-----");
console.log(daftarPesertaObj);

// soal 5

var ada = true;
var tidak = false;
var buah = [{nama: "Strawberry", warna: "Merah", ada_Bijinya: ada, harga: 9000},
            {nama: "Jeruk", warna: "Oranye", ada_Bijinya: ada, harga: 8000},
            {nama: "Semangka", warna: "Hijau & Merah", ada_Bijinya: ada, harga: 10000},
            {nama: "Pisang", warna: "Kuning", ada_Bijinya: tidak, harga: 5000}]

console.log("-----SOAL 5-----");
console.log(buah[0]);

// soal 6

var dataFilm = []

function  addFilm (name, duration, genree, year) {
    dataFilm.push({nama: name}, {durasi: duration}, {genre: genree}, {tahun: year} )
}

addFilm ("Weathering with You", "114 menit", "Drama, Romance, Fantasy", "2019")
console.log("-----SOAL 6-----");
console.log(dataFilm);