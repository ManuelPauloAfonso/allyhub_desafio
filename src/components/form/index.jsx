import { useEffect, useState } from "react";
import api from "../../service/api";
import { Container } from "./style";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cpf } from "cpf-cnpj-validator";



const phoneRegex = /\d{2}\s\d{5}[-]\d{4}/;
const CPFRegex = /(\d{3}\.){2}\d{3}\-\d{2}/;



const validationForm = yup.object().shape({


    nome: yup.string().required('o nome é obrigatorio').max(20, "O título precisa ter menosde 40 caracteres"),
    email: yup.string().email("email invalido").required("email é obrigatorio"),
    telefone: yup.string().required(" o número é obrigatório").matches(phoneRegex, 'O número de telefone informado não é valido.'),
    cpf: yup.string().required("cpf é obrigatório").test( 'cpf-validation', 'cpf invalido', (value) => cpf.isValid(value))

})  


export default function Form() {

    const [pais, setPais] = useState([])
    const [city, setCity] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    })


    useEffect(() => {
        api.get('country')
            .then((response) => {
                setPais(response.data)

            })

        api.get('city')
            .then((response) => {
                setCity(response.data)

            })
    }, [])
    function onSubmit(data) {
        console.log('Data submitted: ', data)
        toast("Os dados do seus Destino foram enviado com sucesso")
    }



    return (
        <Container>
            <h1>🔗Qual é o seu destino de Interesse</h1>
                <form onSubmit={handleSubmit(onSubmit)} id="enviar">
                    <div className="form1">
                        <h3>Dados pessoas</h3>
                        <label>Nome:</label>
                        <input type="text" name="nome" placeholder="por favor inserir seu nome" {...register('nome')} /> 
                        { errors.nome && <p className="errors">{errors.nome?.message}</p>}
                        <label>Email</label>
                        <input type="email" name="email" placeholder="inserir o seu email" {...register('email')} />
                        { errors.email && <p className="errors">{errors.email?.message}</p>}
                        <label>telefone</label>
                        <input type="text" name="telefone" placeholder="inseiri seu telefone" {...register('telefone')} />
                        { errors.telefone && <p className="errors">{errors.telefone?.message}</p>}
                        <label>cpf:</label>
                        <input type="text" name="cpf" placeholder="cpf" {...register('cpf')} />
                        { errors.cpf && <p className="errors">{errors.cpf?.message}</p>}
                    </div>
                    <div className="form2">
                        <h3>Destino de interesse</h3>
                        <select name="select" {...register('select')}>
                            {
                                pais.map(pai => (
                                    <option key={pai.code}>{pai.name}</option>
                                ))
                            }
                        </select>
                        <select name="city" {...register('city')}>
                            {
                                city.map(cit => (
                                    <option key={cit.id}>{cit.name}</option>
                                ))
                            }
                        </select>

                    </div>
                </form>
            <div className="bnt1">
                <button type="submit" form="enviar" className="btn">Enviar</button>
            </div>
            <ToastContainer />
        </Container>
    )
}