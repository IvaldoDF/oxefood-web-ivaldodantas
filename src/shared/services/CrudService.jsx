import axios from 'axios';

const API_URL = 'http://localhost:8080';

export async function listar(url) {
    try {
        const resposta = await axios.get(`${API_URL}${url}`);
        return resposta.data;
    } catch (erro) {
        console.error("Erro ao listar os dados:", erro);
        throw erro;
    }
}