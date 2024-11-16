tanya=true;

while(tanya){
let Angka=Number(prompt("Masukkan angka!"));

if(Angka % 2==0){
    alert(Angka + " Angka yang anda masukkan adalah bilangan Genap");
}else if(Angka % 2==1){
    alert(Angka + " Angka yang anda masukkan adalah bilangan Ganjil");
}else{
    alert("Anda tidak memasukkan angka!!!")
}

tanya=confirm("Apa anda ingin Mengulang");

}