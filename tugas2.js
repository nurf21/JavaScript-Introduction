// ---------------------- SOAL ----------------------
// Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni 
// Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut 
// memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki 
// kondisi dengan ketentuan sebagai berikut :
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

// ---------------------- JAWABAN ----------------------
// Mendeklarasikan variabel
const bhsIndo = 87;
const bhsInggris = 40;
const mat = 61;
const ipa = 8;

// Validasi data nilai
if (typeof bhsIndo=='number' && typeof bhsInggris=='number' && typeof mat=='number' && typeof ipa=='number') {
    let avg = (bhsIndo + bhsInggris + mat + ipa)/4;     // Menghitung nilai rata-rata
    console.log(`Rata-rata = ${avg}`);                  // Tampilkan nilai rata-rata
    if (avg>=90 && avg<=100) {                          // 90 - 100 = A
        console.log('Grade = A');
    } else if (avg>=80 && avg<=89) {                    // 80 - 89 = B
        console.log('Grade = B');
    } else if (avg>=70 && avg<=79) {                    // 70 - 79 = C
        console.log('Grade = C');
    } else if (avg>=60 && avg<=69) {                    // 60 - 69 = D
        console.log('Grade = D');
    } else if (avg>=0 && avg<=59) {                     // 0 - 59 = E
        console.log('Grade = E');
    }
} else {
    console.log('Masukkan nilai hanya dengan angka');    // Tampilkan jika data yang dimasukkan ke nilai bukan angka
}