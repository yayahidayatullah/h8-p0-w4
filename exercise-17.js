function totalDigitRekursif(angka) {
    angkaString = String(angka)
    if(angkaString.length === 0){
        return Number(angkaString)
    }else{
        return Number(angkaString[0])+totalDigitRekursif(angkaString.substr(1));        
    }    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5