// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here
switch (true) {
    case score >= 91:
    console.log('Nilai A')
    break;
    case score >= 71:
        console.log('Nilai B')
        break;
        case score >= 61:
            console.log('Nilai C')
            break;
            case score >= 51:
                console.log('Nilai D')
                break;
                case score <= 50:
                    console.log('Nilai E')
                    break;
}
