function changeMe(arr) {
    var a ={};
    if(arr.length == 0){
        console.log("")
    }
        for(var i = 0;i < arr.length;i++){
            console.log([i+1] + '. ' + arr[i][0] + ' ' + arr[i][1] + ':')
            
            a.firstName = arr[i][0],
            a.lastName = arr[i][1],
            a.gender = arr[i][2];
            if(arr[i][3] >= 2018 || arr[i][3] == undefined){
                a.age= 'Invalid Birth Year';
            }else{
                a.age= 2018-arr[i][3]; 
            }
            
            console.log(a);
        }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""