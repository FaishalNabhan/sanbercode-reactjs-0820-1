// soal 1
console.log('-----SOAL 1-----');
var a = 2;
var b = 20;

console.log('LOOPING PERTAMA');
while(a < 21) {
    console.log(a + " - I love coding");
    a += 2;
}

console.log('LOOPING KEDUA');
while(b > 0) {
    console.log(b + ' - I will become a frontend developer');
    b -= 2;
}

// soal 2
var angka;
var a = "Santai";
var b = "Berkualitas";
var c = "I Love Coding";

console.log("-----SOAL 2-----");
for (var angka = 1; angka <= 20; angka++) {
    if ( angka%3 === 0 && angka%2 === 1 ) {
        console.log(angka + " - " + c )
    } else if ( angka%2 === 1) {
        console.log(angka + " - " + a)
    } else {
        console.log( angka + " - " + b)
    }
}

// soal 3
console.log('-----SOAL 3-----');
for (i = 0; i < 7; i++) {
    var pagar = '#';
    for (j = 1; j <= i; j++) {
      pagar+='#';
    }
    console.log(pagar);
  }

// soal 4
var kalimat = "saya sangat senang belajar javascript";
var array = kalimat.split(" ");

console.log("-----SOAL 4-----");
console.log(array);

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()

var gantiBaris = daftarBuah.join( "\n" );
console.log("-----SOAL 5-----");
console.log(gantiBaris);
