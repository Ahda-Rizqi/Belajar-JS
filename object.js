//membuat object angkot

function Angkot (sopir, trayek, penumpang, kas) {
    this.sopir=sopir;
    this.trayek=trayek;
    this.penumpang=penumpang;
    this.kas=kas;


    this.penumpangNaik=function(namapenumpang){
        this.penumpang.push(namapenumpang);
        return this.penumpang;
    }


    this.penumpangTurun=function(namapenumpang,bayar){
        if(this.penumpang == 0){
            alert("Penumpang Tidak ada !!");
            return false;
        }

        for(let i = 0;i<this.penumpang.length;i++){
            if(this.penumpang[i] == namapenumpang){
                this.penumpang = undefined;
                this.kas += bayar;
                return this.penumpang
            }
        }
    }
};


let angkot1=new Angkot("ahda",["Ciraheum","Cibiru"],[],0)
