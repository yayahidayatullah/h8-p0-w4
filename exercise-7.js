function digitPerkalianMinimum(angka) {
    var hasil =[];
    // var nilai =[];
    for(var i = 0;i <= angka;i++){
        for(var j = 0;j <= angka;j++){
            if(i * j === angka){
                var hasilKali =''+i+j;
                hasil.push(hasilKali);
                // nilai.push(i);
                // nilai.push(j);
                // hasil.push(nilai);
                // nilai = []
            }
        }
    
    }
    var terkecil = hasil[0].length
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