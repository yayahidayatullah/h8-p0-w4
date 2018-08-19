function totalDigitRekursif(angka) {
    var ayam = String(angka)
    if(ayam.length === 0){
        return Number(ayam)
    }else{
        
        var ind = ayam[0];
        return Number(ind) + totalDigitRekursif(ayam.substring(1))
    }
    
}

  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5