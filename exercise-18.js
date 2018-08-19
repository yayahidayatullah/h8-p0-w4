function kaliTerusRekursif(angka) {
    var ayam = String(angka);
    if(ayam.length === 1){
        return Number(angka)
    }else{
        var ind = ayam[0];
        var oporAyam = Number(ind) * kaliTerusRekursif(ayam.substring(1))
    }
    if(String(oporAyam).length > 1){
        var oporAyam = kaliTerusRekursif(oporAyam)
    }
    return oporAyam
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6