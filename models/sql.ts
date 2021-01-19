interface ISql{
    [index : string] : string;
}

const TSql = {} as ISql;
TSql["OpsiFindAll"] = "select * from tbl_opsi;";
TSql["BarangFindAll"] = "select * from tbl_barang;";

export default TSql;