function ubahHuruf(kata) {
  var abcd = 'abcdefghijklmnoprstuvwxyz';
  var hasil = ''
  for(var i = 0;i < kata.length ;i++){
      for(var j = 0; j < abcd.length;j++){
          if(kata[i] === abcd[j]){
              hasil+=abcd[j+1]
          }
      }
  }
  return hasil
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu