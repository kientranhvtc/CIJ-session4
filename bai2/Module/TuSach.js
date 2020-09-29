import Sach from "./Sach.js";

class TuSach{
    id;
    slgSachLN;
    sach = [];
    ngaytao;
    constructor(id, slgSachLN, sach, ngaytao){
        this.id = id;
        this.slgSachLN = slgSachLN;
        this.sach = sach;
        this.ngaytao = ngaytao;
    }
}

export default TuSach;