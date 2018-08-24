function kaliTerusRekursif(angka) {
    stringAngka = String(angka);
    if(stringAngka.length === 1){
        return Number(stringAngka);
    }
    var stringAngka2 = Number(stringAngka[0])*kaliTerusRekursif(stringAngka.substr(1));
    
    var stringAngka2 = kaliTerusRekursif(stringAngka2)
    return stringAngka2;
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
  console.log(kaliTerusRekursif(999999)); // 6