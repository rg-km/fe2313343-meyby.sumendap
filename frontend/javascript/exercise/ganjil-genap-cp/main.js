function ganjilGenap(plat) {
  // TODO: answer here
  if (plat === undefined || plat === null) {
    return "invalid data";
  } else if (plat === "") {
    return "plat tidak ditemukan";
  } else {
    var NomorPlat = plat.split(";");
    var ganjil = 0, genap = 0;

    for (var i = 0; i < NomorPlat.length; i++) {
      if (NomorPlat[i] % 2 == 0) {
        genap += 1;
      } else {
        ganjil += 1;
      }
    }
  }

  if (ganjil > 0 && genap == 0) {
    return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`;
  } else if (genap > 0 && ganjil == 0) {
    return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`;
  } else if (ganjil > 0 && genap > 0) {
    return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`;
  }
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data

module.exports = ganjilGenap;