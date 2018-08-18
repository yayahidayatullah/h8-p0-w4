function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    if(shoppers.length === 0){
        return []
    }                 
    var hasil = [{ product: listBarang[0][0],
                    shoppers: [],
                    leftOver: listBarang[0][2],
                    totalProfit: 0},
                { product: listBarang[1][0],
                    shoppers: [],
                    leftOver: listBarang[1][2],
                    totalProfit: 0 },
                { product: listBarang[2][0],
                    shoppers: [],
                    leftOver: listBarang[2][2],
                    totalProfit: 0 }];
    for(var i = 0;i < shoppers.length;i++){
        
        if(hasil[0].product === shoppers[i].product && shoppers[i].amount <= hasil[0].leftOver){
            hasil[0].shoppers.push(shoppers[i].name);
            hasil[0].leftOver -= shoppers[i].amount;
            hasil[0].totalProfit += shoppers[i].amount*listBarang[0][1];
        }
        if(listBarang[1][0] === shoppers[i].product && shoppers[i].amount <= hasil[1].leftOver){
            hasil[1].shoppers.push(shoppers[i].name);
            hasil[1].leftOver -= shoppers[i].amount;
            hasil[1].totalProfit += shoppers[i].amount*listBarang[1][1];
        }
        if(listBarang[2][0] === shoppers[i].product && shoppers[i].amount <= hasil[2].leftOver){
            hasil[2].shoppers.push(shoppers[i].name);
            hasil[2].leftOver -= shoppers[i].amount;
            hasil[2].totalProfit += shoppers[i].amount*listBarang[2][1]
        }    
    }
    return hasil
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]