function digitPerkalianMinimum(angka) {
    var hasil =[];
    //jika looping pertama dikalikan looping kedua hasilnya sama dengan angka,maka angka pada looping keduanya dimasukkan ke variabel hasil.
    for(var i = 0;i <= angka;i++){
        for(var j = 0;j <= angka;j++){
            if(i * j === angka){
                var hasilKali =''+i+j;
                hasil.push(hasilKali);
                
            }
        }
    
    }
    //buat var baru untuk menampung nilai terkecil
    var terkecil = hasil[0].length
    //looping untuk mencari digit terkecil dari hasil,jika ditemukan yang terkecil maka hitung length nya dan length dijadikan hasil.
    for(var j = 0;j < hasil.length;j++){
        if(hasil[j].length < terkecil){
            terkecil = hasil[j].length
        }
    }


    return terkecil
}    
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2