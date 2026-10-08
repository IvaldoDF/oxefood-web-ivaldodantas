import { useState } from "react";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import axios from "axios";
import BackButton from "../../../shared/components/BackButton";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import SaveButton from "../../../shared/components/SaveButton";
import { MAPPING_CONTROLLER_CLIENTE } from "../service/clienteService";

export default function ClienteForm() {

    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        foneCelular: "",
        foneFixo: "",
        email: ""
    });

    async function salvar() {
        try {
            console.log("A enviar dados:", cliente);
            
            const resposta = await axios.post(`http://localhost:8080${MAPPING_CONTROLLER_CLIENTE}`, cliente);
            
            console.log("Sucesso:", resposta.data);
            toast.success("Cliente salvo com sucesso!");
        } catch (erro) {
            console.error("Detalhe do erro:", erro.response || erro.message);
            if (erro.response && erro.response.data) {
                toast.error(`Erro: ${JSON.stringify(erro.response.data)}`);
            } else {
                toast.error("Erro ao conectar com o servidor.");
            }
        }
    }

    return (
        <div>
            <Menu />

            <div style={{ marginTop: '60px', marginLeft: '10%', marginRight: '10%' }}>
                <div className="overflow-x-auto overflow-y-auto">
                    <div className="flex items-center justify-between my-2" style={{ marginTop: '20px', marginLeft: '10%', marginRight: '10%' }}>
                        <h1 className="text-xl font-bold text-gray-800">
                            Novo Cliente
                        </h1>
                    </div>

                    <div className="divider divider-info" />

                    <div className="overflow-x-auto" style={{ padding: '20px' }}>
                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-legend" htmlFor="nome">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        className="input input-bordered w-full"
                                        value={cliente.nome}
                                        onChange={(e) =>
                                            setCliente({ ...cliente, nome: e.target.value })
                                        }
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-legend" htmlFor="cpf">CPF</label>
                                    <IMaskInput
                                        mask="000.000.000-00"
                                        value={cliente.cpf}
                                        onAccept={(value) =>
                                            setCliente({ ...cliente, cpf: value })
                                        }
                                        className="input input-bordered w-full"
                                        id="cpf"
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-legend" htmlFor="foneCelular">Fone Celular</label>
                                    <IMaskInput
                                        mask="(00) 0 0000-0000"
                                        value={cliente.foneCelular}
                                        onAccept={(value) =>
                                            setCliente({ ...cliente, foneCelular: value })
                                        }
                                        className="input input-bordered w-full"
                                        id="foneCelular"
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-legend" htmlFor="foneFixo">Fone Fixo</label>
                                    <IMaskInput
                                        mask="(00) 0000-0000"
                                        value={cliente.foneFixo}
                                        onAccept={(value) =>
                                            setCliente({ ...cliente, foneFixo: value })
                                        }
                                        className="input input-bordered w-full"
                                        id="foneFixo"
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-legend" htmlFor="dataNascimento">Data de Nascimento</label>
                                    <input
                                        type="date"
                                        id="dataNascimento"
                                        className="input input-bordered w-full"
                                        value={cliente.dataNascimento}
                                        onChange={(e) =>
                                            setCliente({ ...cliente, dataNascimento: e.target.value })
                                        }
                                    />
                                </fieldset>
                            </div>
                        </div>

                        {/* Campo de E-mail adicionado para evitar o erro de chave única duplicada */}
                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-legend" htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="input input-bordered w-full"
                                        value={cliente.email}
                                        onChange={(e) =>
                                            setCliente({ ...cliente, email: e.target.value })
                                        }
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <div style={{ marginTop: '20px', textAlign: 'left' }}>
                                    <BackButton destiny="/cliente" />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="card rounded-box grid grow p-3" style={{ padding: '20px' }}>
                                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                                    <SaveButton save={() => salvar()} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}