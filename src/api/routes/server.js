import express from "express";
import cors from "cors";
import connection from "../config/db";
import { getAllMorador, createMorador, updateMorador, deleteMorador } from "../controllers/moradorController";
const app = express();

app.use(express.json());
app.use(cors());

app.get(`/morador`, getAllMoradores);
app.post(`/morador`, createMorador);
app.put(`/morador/:id`, updateMorador);
app.delete("/morador/:id", deleteMorador);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso 3000`);
});