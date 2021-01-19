import {renderFileToString} from 'https://deno.land/x/dejs/mod.ts';
import {select, select1} from '../models/pg_model.ts';
import TSql from '../models/sql.ts';

const home = async({response}:{response : any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            nama : "ANISA",
            isi : "Selamat datang di toko oleh-oleh khas Banyuwangi ANISA. Kami selalu memberikan yang terbaik untuk anda. Kualitas terpercaya, harga ramah kantong, pelayanan ramah.",
            tombol : "Cek Sekarang",
            opsi : await select({
                text : TSql["OpsiFindAll"]
            })
        },
        subview : {
            file : "./views/cover.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}

const product = async({response}:{response : any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            opsi : await select({
                text : TSql["OpsiFindAll"]
            }),
            barang : await select1({
                text : TSql["BarangFindAll"]
            })
        },
        subview : {
            file : "./views/headline.ejs"
        }
    });
    response.body = new TextEncoder().encode(html);
}

export {home, product};