function changeVocals (str) {
    var hurufVokal = 'aiueoAIUEO';
    var pengganti = 'bjvfpBJVFP';
    var hurufTanpaVokal = 'bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ'
    var hasil1 = '';
    for(var i = 0;i < str.length ;i++){
        for(var j = 0; j < hurufVokal.length;j++){
            if(str[i] === hurufVokal[j]){
                  hasil1+=pengganti[j]
            }
            
        }
        for(var k = 0;k < hurufTanpaVokal.length;k++){
            if(str[i] === hurufTanpaVokal[k]){
                hasil1+=hurufTanpaVokal[k]
            }
        }
    }

  return hasil1
  }
  
  function reverseWord (str) {
    var hasil2 = '';  
    for(var i = str.length-1;i >= 0;i--){
        hasil2+= str[i]
    }
    return hasil2
  }
  
  function setLowerUpperCase (str) {
    var kalimatUbah = '';
    var karakterLain = '1234567890+-)(*&^%$#@!~`] [;\'":/.,?><';
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0;i < str.length;i++){
        for(var j = 0;j < hurufBesar.length; j++){
            if(str[i] === hurufBesar[j]){
                kalimatUbah+= hurufKecil[j];
            }else if(str[i] === hurufKecil[j]){
                kalimatUbah+= hurufBesar[j];
            }
        }
        for(var k = 0;k < karakterLain.length; k++){
            if(str[i] === karakterLain[k]){
                kalimatUbah+= karakterLain[k];
            }
        }

    }
return kalimatUbah
  }
  
  function removeSpaces (str) {
    var hasil = '';
    for(var i = 0;i < str.length;i++){
        if(str[i] === ' '){
            hasil+= '';
        }else{
            hasil+= str[i]
        }
    }
    return hasil
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
        var gantiVokal = changeVocals(name);
        var balikKata = reverseWord(gantiVokal)
        var hurufBesarKecil = setLowerUpperCase(balikKata);
        var hapusSpasi = removeSpaces(hurufBesarKecil);
        var hasil = hapusSpasi  
        return hasil
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  