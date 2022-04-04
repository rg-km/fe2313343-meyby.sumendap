function conversiRoman(num) {
    // code disini
    let angka = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roma = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let hasil = '';
    for(let i = angka.length; i >= 0; i--) {
          while(num >= angka[i]) {
              num = num - angka[i];
              hasil = hasil + roma[i];
          } 
      }
    return hasil;
  }
  
  console.log(conversiRoman(149)) // I
  console.log(conversiRoman(4)) // IV
  console.log(conversiRoman(190)) // CXC