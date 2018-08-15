function changeMe(arr) {
    var a ={};
    if(arr.length == 0){
        console.log("")
    }
        for(var i = 0;i < arr.length;i++){
            console.log([i+1] + '. ' + arr[i][0] + ' ' + arr[i][1] + ':')
            if(arr[i].length == 0){
            }
            if(arr[i].length >= 1){
                a.firstName = arr[i][0]
            }else{
                a.firstName = 'Invalid First Name';
            }    
            if(arr[i].length >= 2){
                a.lastName = arr[i][1]
            }else{
                a.lastName = 'Invalid Last Name';
            }
            if(arr[i].length >= 3){
                a.gender = arr[i][2]
            }else{
                a.gender = 'Invalid Gender';
            }    
            if(arr[i].length >= 4){
                a.age= (2018)-arr[i][3]; 
            }else{
                a.age= 'Invalid Birth Year';
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