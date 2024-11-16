// Deklarasikan array bus sebagai kosong
let bus = [];

let tambahpenumpang = function (namapenumpang, bus) {
  if (bus.length == 0) {
    bus.push(namapenumpang);
    return bus;
  } else {
    for (let i = 0; i < bus.length; i++) {
      if (bus[i] == namapenumpang) {
        console.log("Penumpang dengan nama " + namapenumpang + " sudah ada");
        return bus;
      } else if (bus[i] === undefined) {
        bus[i] = namapenumpang;
        return bus;
      }
    }
    bus.push(namapenumpang);
    return bus;
  }
};


