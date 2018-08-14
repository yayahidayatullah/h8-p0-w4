function fpb(angka1, angka2) {
    var fpb1 =[];
    var fpb2 =[];
    
    var pendek = [];
    var hasil = [];
    for(var i = angka1-1; i > 0;i--){
      if(angka1 % i === 0){
          fpb1.push(i);
      }  
    }
    for(var j = angka2-1;j > 0;j--){
      if(angka2 % j === 0) {
          fpb2.push(j);
      }  
    }
    if(fpb1.length <= fpb2.length){
        var panjang = fpb2;var pendek =fpb1;
    }else if(fpb2.length < fpb1.length){
        var panjang = fpb1;var pendek = fpb2;
    }
    for(var k = 0; k < panjang.length ;k++){
        for(var l = 0 ; l < pendek.length ;l++){
            if(panjang[k] === pendek[l]){
                hasil.push(panjang[k]);
            }
        }
    }
    return hasil[0]
    
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1