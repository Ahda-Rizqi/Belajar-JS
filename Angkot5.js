let tanya=true;

while (tanya) {
  let lives = 3;
  //komputer memngabil angka

  alert("Tebak Angka antara 1-10.\n Ingat anda memiliki 3 nyawa!!");
  let comp = Math.floor(Math.random() * 10) + 1;

  while (lives > 0) {
    //user memasukkan angka
    let u = prompt("Masukkan Angka dari 1-10!");

    if (u == comp) {
      alert("Tebakan kamu benar!");
      break
    } else if (u > comp) {
      lives--;
       alert("Tebakan kamu terlalu tinggi. Sisa nyawa: " + lives);
    } else {
      lives--;
       alert("Tebakan kamu terlalu rendah. Sisa nyawa: " + lives);
    }

    if (lives === 0) {
      alert("Anda kalah! jawaban yang benar adalah " + comp+ ".");
    }

  }

  tanya=confirm("Apakah anda ingin bermain lagi");
}
