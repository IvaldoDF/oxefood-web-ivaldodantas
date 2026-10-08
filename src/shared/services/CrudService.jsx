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

export async function incluir(url, objeto) {
    try {
        const resposta = await axios.post(`${API_URL}${url}`, objeto);
        return resposta.data;
    } catch (erro) {
        console.error("Erro ao incluir os dados:", erro);
        throw erro;
    }
}

export async function atualizar(url, objeto) {
    try {
        const resposta = await axios.put(`${API_URL}${url}`, objeto);
        return resposta.data;
    } catch (erro) {
        console.error("Erro ao atualizar os dados:", erro);
        throw erro;
    }
}

export async function remover(url, id) {
    try {
        const resposta = await axios.delete(`${API_URL}${url}/${id}`);
        return resposta.data;
    } catch (erro) {
        console.error("Erro ao remover os dados:", erro);
        throw erro;
    }
}