/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/
 let timer = document.getElementById('stopwatch'); 
 let startbtn =  document.getElementById('start');
 let stopbtn =  document.getElementById('stop');
 let resetbtn =  document.getElementById('reset');
 
 var jam = 0;
 var menit = 0;
 var detik = 0;
 var stoptime = true;
 
 
 // TODO: answer here

function start() {
  // TODO: answer here
  if (stoptime == true) {
    stoptime = false;
    runTime();
}
}

function stop() {
  // TODO: answer here

  if (stoptime == false) {
    stoptime = true;
  }

}

function reset() {
  // TODO: answer here
  
  timer.innerHTML = "00:00:00";
  stoptime = true;
  jam = 0;
  detik = 0;
  menit = 0;
  
}

function runTime() {
  // TODO: answer here
  
  if (stoptime == false) {
    detik = parseInt(detik);
    menit = parseInt(menit);
    jam = parseInt(jam);
    
    detik = detik + 1;
    
    if (detik == 60) {
      menit = menit + 1;
      detik = 0;
    }
    if (menit == 60) {
      jam = jam + 1;
      menit = 0;
      detik = 0;
    }
    
    if (detik < 10 || detik == 0) {
      detik = '0' + detik;
    }
    if (menit < 10 || menit == 0) {
      menit = '0' + menit;
    }
    if (jam < 10 || jam == 0) {
      jam = '0' + jam;
    }
    
    timer.innerHTML = jam + ':' + menit + ':' + detik;
    
    setTimeout("runTime()", 1000);
  }
  
  
  
}

startbtn.addEventListener('click', () => {
  start();
});
stopbtn.addEventListener('click', () => {
  stop();
});

resetbtn.addEventListener('click', () => {
  reset();
});
