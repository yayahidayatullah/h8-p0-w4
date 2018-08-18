function sorting(arrNumber) {
    
    for(var i =0;i< arrNumber.length;i++){
        for(var j = i+1; j < arrNumber.length;j++){
            if(arrNumber[j] < arrNumber[i]){
                var penampung = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = penampung;
            }
        }
    }
    // console.log(arrNumber)
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    var terbesar = arrNumber[0];
    var kemunculan = 0;
    if(arrNumber.length === 0){
        return ''
    }
    for(var i=0;i<arrNumber.length;i++){
        if(arrNumber[i] > terbesar){
            terbesar = arrNumber[i];
        }
    }
    for(var j = 0;j < arrNumber.length;j++){
        if(terbesar === arrNumber[j]){
            kemunculan++
        }
    }
    // console.log(terbesar);
    // console.log(kemunculan);
    return 'angka paling besar adalah ' + terbesar + ' dan jumlah kemunculan sebanyak ' + kemunculan + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''