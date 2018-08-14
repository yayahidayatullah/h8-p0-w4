function tukarBesarKecil(kalimat) {
    var kalimatUbah = '';
    var karakterLain = '1234567890+-)(*&^%$#@!~`] [;\'":/.,?><';
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0;i < kalimat.length;i++){
        for(var j = 0;j < hurufBesar.length; j++){
            if(kalimat[i] === hurufBesar[j]){
                kalimatUbah+= hurufKecil[j];
            }else if(kalimat[i] === hurufKecil[j]){
                kalimatUbah+= hurufBesar[j];
            }
        }
        for(var k = 0;k < karakterLain.length; k++){
            if(kalimat[i] === karakterLain[k]){
                kalimatUbah+= karakterLain[k];
            }
        }

    }
    return kalimatUbah
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"