// ---------------------- SOAL ----------------------
// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” 
// yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

// ---------------------- JAWABAN ----------------------
// Mendeklarasikan variabel
const printSegitiga = 5;


if (typeof printSegitiga == 'number') {         // Validasi tipe data number
    for (let i = printSegitiga; i>=1; i--) {    // Proses pengulangan untuk batas kebawah
        let row = '';                           // Mendeklarasikan variabel
        for (let j = 1; j<=i; j++) {            // Proses pengulangan untuk mengisi baris / ke samping
            row += j+' ';                       // Simpan hasil pengulangan j di variabel row
        }
        console.log(row);                       // Tampilkan isi row
    }
} else {
    console.log('Data harus number');           // Tampilkan jika datanya bukan angka
}