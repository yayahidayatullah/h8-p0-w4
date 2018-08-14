function cariModus(arr) {
    var masukanSalah = 0;//menangkap angka yang sama untuk dibandingkan dengan jumlah karakternya
    var penampung = [];//untuk menampung hasil yang sama sesuai group masing2
    var group = [];//group berisi masing2 karakter sama(satu group satu karakter)
    //LOOPING PERTAMA
    //untuk Mencari jika yang dimasukkan hanya satu macam angka
    for(var j = 0 ; j < arr.length; j++){
        if(arr[j] === arr[0]){
            masukanSalah+= 1;
        }
    }
    //LOOPING KEDUA
    //untuk mengelompokkan angka yang sama kedalam var penampung
    for(var i = 0 ;i < arr.length ;i++){
            for(var j = i+1; j < arr.length ;j++){
            if(arr[i] === arr[j]){
                group.push(arr[i]);
                group.push(arr[j]);
                //jika karakternya sama,push keduanya ke dalam var group
                
            }
            if(j === arr.length-1 && group.length > 0){
                penampung.push(group);
                group = [];
                //jika mencapai akhir looping mencari angka sama,push group ke penampung dan reset kembali group(untuk angka sama selanjutnya)
            }
        }
    }
    penampung.sort(function(a, b){return b.length - a.length});
    //sort untuk mengurutkan berdasarkan bayaknya karakter sama(menggunakan sort by length)
    if(masukanSalah === arr.length){
        return '-1'//supaya outputnya -1 jika angka yang sama juga sama dengan panjang masukannya
    }else if(masukanSalah !== arr.length && penampung.length !== 0 ){
        return penampung[0][0]
        //jika bukan merupakan masukan salah dan jika penampungnya tidak kosong tampilkan hasilnya(berlaku juga jika angka sama lebih banyak maka yang lebih banyak yang ditampilkan)
    }else{
        return '-1'
        //jika selain yang diata(tidak ada karakter sama) tampilkan -1
    }
}  
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7,7])); // -1        