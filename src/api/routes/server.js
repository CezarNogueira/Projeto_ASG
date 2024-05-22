import express from "express";
import cors from "cors";
import { getAllMorador, createMorador, updateMorador, deleteMorador } from "../controllers/moradorController.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get(`/cadastrar/morador`, getAllMorador);
app.post(`/cadastrar/morador`, createMorador);
app.put(`/cadastrar/morador/:id`, updateMorador);
app.delete(`/deletar/morador/:id`, deleteMorador);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso 3000`);
});