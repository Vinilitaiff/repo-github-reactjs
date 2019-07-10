import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
  };

  handleInputChange = e => {
    this.state({ newRepo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.newRepo);
  };

  render() {
    const { newRepo } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositorios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Respositorio"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton disable>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
