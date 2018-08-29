function hitungHuruf(kata) {

    var kataSplit = kata.split(' ');
    var hasil =[];
  
    for(var i = 0; i < kataSplit.length;i++){
      //console.log(kataSplit)
      var jumlah = ['',[kataSplit[i]]];
      for(var j = 0; j < kataSplit[i].length;j++){
        //console.log('===',kataSplit[i][j])
        for(var k = j+1;k < kataSplit[i].length;k++){
          if(kataSplit[i][j] === kataSplit[i][k]&&kataSplit[i][j] !== jumlah[0][jumlah[0].length-1]){
            jumlah[0]+=kataSplit[i][j];
            
          }
          //console.log(kataSplit[i][k],'  ',jumlah[0])
        }
      }
      hasil.push(jumlah)

    }
    var terbesar = hasil[0];
    for(var i=0;i<hasil.length;i++){
        if (hasil[i][0].length > terbesar[0].length){
            terbesar = hasil[i];
        }
    }
    return terbesar[1][0]
  }

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau