import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://progflix.herokuapp.com/categorias';
    fetch(URL_TOP).then(async (serverResponse) => {
      const resposta = await serverResponse.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form
        style={{ marginBottom: '25px' }}
        onSubmit={
          function handleSubmit(event) {
            event.preventDefault();
            categoriasRepository.createCategory({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: values.cor,
            })
              .then(() => {
                console.log('Cadastrou com sucesso!');
                history.push('/');
              });
            clearForm();
          }
      }
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar Categoria
        </Button>
        <Button style={{ marginLeft: '25px' }}>
          <Link style={{ textDecoration: 'none' }} to="/">
            Ir para home
          </Link>
        </Button>
      </form>

      {/* {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <p>Categorias Disponíveis:</p>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul> */}

    </PageDefault>
  );
}

export default CadastroCategoria;
