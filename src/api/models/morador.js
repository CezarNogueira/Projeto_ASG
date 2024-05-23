import connection from "../config/db.js";


    //Metodo responsavel por realizar a leitura
    export function read(callback) {
        connection.query("SELECT * FROM morador WHERE ativo_morador = 1", callback);
    }
    //Metodo responsavel por realizar a inserção
    export function create(novoMorador, callback) {
        connection.query("INSERT INTO morador SET ?", [ novoMorador ], callback);
    }
    //Metodo responsavel por realizar a atualização
    export function update(id, novosDados, callback) {
        connection.query("UPDATE morador SET ? WHERE idmorador = ?", [ novosDados, id ], callback);
    }
    //Metodo responsavel por realizar o delete
    export function deleteM(id, callback) {
        //setar como inativo
        connection.query("UPDATE morador SET ativo_morador = 0 WHERE idmorador = ?", [ id ], callback);
    }