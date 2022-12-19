//let masuk = 10;
//let keluar = 3;

//function menentukanlamakerja(){
   //if(keluar > masuk ){
   //return( keluar - masuk + ' jam')
   //}else{
   //return( (12 - masuk)+keluar +' jam')   
   //}
//}

//console.log(menentukanlamakerja())


function menentukanlamakerja(masuk, keluar){
   if(keluar >= masuk ){
   return( keluar - masuk + ' jam')
   }else{
   return( (12 - masuk)+keluar +' jam')   
   }
}

console.log(menentukanlamakerja(10, 3))