// ---------------------- SOAL ----------------------
// Dari data dibawah ini
// let data = {
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address: 
// {
// street: "Kulas Light",
// suite: "Apt. 556",
// city: "Gwenborough",
// zipcode: "92998-3874",
// },
// phone: "1-770-736-8031 x56442",
// website: "hildegard.org",
// }
// Ubahlah data  tersebut menggunakan spread operator menjadi: 
// name: nama anda
// email: email anda
// hobby: hobi anda

// Ambilah data “street dan city” tersebut menggunakan destructuring

// ---------------------- JAWABAN ----------------------
// Mendeklarasikan variabel
let data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
};

// Mengganti nama dan email serta menambahkan hobby menggunakan spread operator
data = {...data, name: 'Giri Said Nurfauzan', email: 'nurfauzangiri@gmail.com', hobby: 'Gaming'};

// Ambil data street dan city kedalam variabel baru dengan nama yang sama menggunakan destructuring
const {street, city} = data.address;