import { create, read, update, deleteM } from "../models/morador.js";

// Realizar INSERT (CREATE)
export async function createMorador(req, res) {
    //nome_morador, idade_morador, cpf_morador, datanascimento_morador, genero_morador, estadocivil_morador, telefone_morador, cep_morador
    const dados = req.body;

    // Insersão de Dados
    create(dados, (err, result) => {
        if (err) {
            console.error('Erro ao inserir dado no banco de dados:', err);
            res.status(500).send('Erro ao inserir dado no banco de dados');
            return;
        }
        console.log('Dado inserido com sucesso:', result);
        res.status(200).send(dados);
    }); 
}
//Realizar Consulta(READ)
export async function getAllMorador(req, res) {
    read((err, morador) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(morador);
    });
}
//Realizando Atualização (UPDATE)
export async function updateMorador(req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    update(id, novosDados, (err, result) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send("Morador atualizado com Sucesso");
    });
}
//Realizando Desativação (DELETE)
export async function deleteMorador(req, res) {
    const { id } = req.params;
    deleteM(id, (err, result) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send("Morador Eliminado com Sucesso");
    });
}  