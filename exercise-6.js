function hitungHuruf(kata) {

    var kataSplit = kata.split(' ')
  
    for(var i = 0; i < kataSplit.length; i++){
      for(var j = 1; j < kataSplit[i].length - 1; j++){
        for(var k = 1; k < kataSplit[i].length - 1; k++){
          if(kataSplit[i][j] === kataSplit[i][j+k]){
            return kataSplit[i]
          } 
        }
      }
    }
  }

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau