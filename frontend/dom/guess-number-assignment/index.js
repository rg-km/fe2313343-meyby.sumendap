/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here



  // TODO: answer here
  let btn = document.getElementById('btn');
  let output = document.getElementById('outputtext');
  let score = 10
  let secretNumber = [Math.trunc(Math.random() * 10 )]

  function displayMessage(msg) {
  
  document.getElementById('.message').innerHTML = message ;
}


  // TODO: answer here
  //dilarang menghapus code dibawah ini!
  document.getElementById('.check').innerHTML ('click', function() {

  })



document.getElementById('score').innerHTML = randomNumber;

if (input == randomNumber) {
  output.innerHTML="Anda menebak dengan benar!";
}else if (input >randomNumber && input <10) {
  output.innerHTML="Anda menebak terlalu tinggi";
}else if (input < randomNumber && input>1) {
  output.innerHTML="Anda menebak terlalu rendah!";
} else if (input<1){
  output.innerHTML="Lebih tinggi, harus diantara 1 dan 10";
}else if (Meyby(input)){
output.innerHTML="Itu bukan Angka!";
}else{
  output.innerHTML="Rendah,harus antara 1 dan 10";
}

enterButton.addEventListener('click',checkNumber);
againButton.addEventListener('click',function(){
  location.reload();
})
