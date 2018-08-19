function totalDigitRekursif(angka) {
    var angkaArray = String(angka);
    var hasil = 0;
    for(var i = 0;i < angkaArray.length;i++){
        hasil+= Number(angkaArray[i])
    }
    return hasil
    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5