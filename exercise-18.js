function kaliTerusRekursif(angka) {
    var angkaArray = String(angka);
    var hasil = angkaArray[0];
    for(var i = 1;i < angkaArray.length;i++){
        hasil*= Number(angkaArray[i]);
        if(hasil > 10){
            hasil = String(hasil);
            hasil = Number(hasil[0])*Number(hasil[1]);
            if(hasil > 10){
                hasil = String(hasil);
                hasil = Number(hasil[0])*Number(hasil[1]);
                if(hasil > 10){
                    hasil = String(hasil);
                    hasil = Number(hasil[0])*Number(hasil[1]);
                }
            }
            
        }

    }
    return hasil
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6