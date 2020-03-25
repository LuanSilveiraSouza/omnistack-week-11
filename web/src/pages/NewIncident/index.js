import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    }

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });
      history.push('/profile');
    } catch(err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return(
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero"/>

          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva o caso detalhadamente e encontre o heroi que resolverá ele.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input placeholder="Título do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input placeholder="Valor em R$"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="Submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}