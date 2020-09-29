import Sach from "./Module/Sach.js";
import TuSach from "./Module/TuSach.js";


let TuSachs = [];
let idTuSach = 0;
let idSach = 0;
while(true){
    let input = prompt(`Chào mừng bạn đến với hệ thống quản lý tủ sách!
                        Nhập 1 để thêm tủ sách mới
                        Nhập 2 để sửa tủ sách đã có
                        Nhập 3 để xoá tủ sách đã có
                        Nhập 4 để xem danh sách tủ sách đã có
                        `);
    if(input == "1"){
        idTuSach++;
        let countSach = 1;
        let sach = [];
        alert(`Tủ sách thứ ${idTuSach}`)
        let maxSlg = Number(prompt("Số lượng sách lớn nhất chứa được"));
        while (true){
            let question = Number(prompt("Bạn có muốn thêm sách? 1 là có, 0 là không"));
            if(question && countSach <= maxSlg){
                idSach++;
                alert("Bắt đầu thêm sách mới!");
                let tensach = prompt("Tên sách");
                let tacgia = prompt("Tác giả");
                let theloai = prompt("Thể loại");
                let today = new Date();
                let ngaytao = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
                sach.push(new Sach(idSach, tensach, tacgia, theloai, ngaytao));
                alert(`Thêm thành công sách ${tensach}`);
                countSach++;
            }
            else if(question){
                alert("Tủ sách đã đầy");
            }
            else break;
        }
        let today = new Date();
        let ngaytao = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();;
        TuSachs.push(new TuSach(idTuSach, maxSlg, sach, ngaytao));
    }
    else if (input == "2"){
        let id = prompt("Nhập id tủ sách cần sửa");
        let idS = prompt(`Tủ sách ${id} có chứa ${TuSachs[id-1].sach.length} quyển sách!
                Nhập id sách muốn sửa`);
        let tensach = prompt("Tên sách");
        let tacgia = prompt("Tác giả");
        let theloai = prompt("Thể loại");
        TuSachs[id-1].sach[idS-1].tensach = tensach;
        TuSachs[id-1].sach[idS-1].tacgia = tacgia;
        TuSachs[id-1].sach[idS-1].theloai = theloai;
        alert("Sửa thành công");
    }
    else if (input == "3"){
        let id = prompt("Nhập id tủ sách cần xoá");
        TuSachs.splice(id-1,1);
        alert("Xoá thành công");
    }
    else if (input == "4"){
        console.log(...TuSachs);
    }
    else break;
}