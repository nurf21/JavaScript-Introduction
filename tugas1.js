// ---------------------- SOAL ----------------------
// Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data sebagai berikut:
// name (string)
// age (number)
// hobbies (array)
// IsMaried (boolean)
// schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
// skills (Array of Obj) with key skillName and level (beginner, advanced, expert)
// interestInCoding (Boolean)

// ---------------------- JAWABAN ----------------------
// Mendeklarasikan variable
const biodata = {
    name: 'Giri Said Nurfauzan',
    age: 22,
    hobbies: ['Gaming', 'Internet Surfing', 'Coding'],
    isMarried: false,
    schoolList: [
        {
            name: 'SD Negeri Pengamon 1 Cirebon',
            yearIn: 2003,
            yearOut: 2009,
            major: null
        },
        {
            name: 'SMP Negeri 1 Cirebon ',
            yearIn: 2009,
            yearOut: 2012,
            major: null
        },
        {
            name: 'SMA Negeri 1 Cirebon',
            yearIn: 2012,
            yearOut: 2015,
            major: 'IPA'
        },
    ],
    skills: [
        {
            skillName: 'JavaScript',
            level: 'Beginner',
        },
        {
            skillName: 'HTML',
            level: 'Beginner',
        },
        {
            skillName: 'CSS',
            level: 'Beginner',
        },
        {
            skillName: 'MySQL',
            level: 'Beginner',
        },
        {
            skillName: 'PHP',
            level: 'Beginner',
        }
    ],
    interestInCoding: true
};