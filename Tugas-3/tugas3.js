// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var senang = kataKedua[0].toUpperCase().concat(kataKedua.substring(1));
var jsbesar = kataKeempat.toUpperCase();
console.log(kataPertama + " " + senang + " " + kataKetiga + " " + jsbesar);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var numPertama = Number(kataPertama);
var numKedua = Number(kataKedua);
var numKetiga = Number(kataKetiga);
var numKeempat = Number(kataKeempat);
console.log(numPertama + numKedua + numKetiga + numKeempat);

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(3, 14);
var kataKetiga = kalimat.substring(14, 18);
var kataKeempat = kalimat.substring(18, 24);
var kataKelima = kalimat.substring(24, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 65;

if ( nilai >=80 && nilai <= 100 ) {
    console.log("A")
}  else if ( nilai >=70 && nilai <80 ) {
    console.log("B")
}  else if (nilai >=60 && nilai <70 ) {
    console.log("C")
}  else if (nilai >=50 && nilai <60 ) {
    console.log("D")
}  else if ( nilai <50 ) {
    console.log("E")
}  else {
    console.log(" ")
}

// soal 5

var tanggal = 17;
var bulan = 4;
var tahun = 2002;

switch (bulan) {
    case 1:      { console.log(tanggal + " " + 'Januari' + " " + tahun); break; }
    case 2:      { console.log(tanggal + " " + 'Februari' + " " + tahun); break; }
    case 3:      { console.log(tanggal + " " + 'Maret' + " " + tahun); break; }
    case 4:      { console.log(tanggal + " " + 'April' + " " + tahun); break; }
    case 5:      { console.log(tanggal + " " + 'Mei' + " " + tahun); break; }
    case 6:      { console.log(tanggal + " " + 'Juni' + " " + tahun); break; }
    case 7:      { console.log(tanggal + " " + 'Juli' + " " + tahun); break; }
    case 8:      { console.log(tanggal + " " + 'Agustus' + " " + tahun); break; }
    case 9:      { console.log(tanggal + " " + 'September' + " " + tahun); break; }
    case 10:     { console.log(tanggal + " " + 'Oktober' + " " + tahun); break; }
    case 11:     { console.log(tanggal + " " + 'November' + " " + tahun); break; }
    case 12:     { console.log(tanggal + " " + 'Desember' + " " + tahun); break; }
    default:     { console.log(" "); break; }
}