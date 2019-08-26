import React, { Component } from 'react';
import DisplayForm from '../components/notes/NoteForm';
import { createNote } from '../services/notesApi';

export default class CreateNote extends Component{
  state = {
    title: '',
    body: '',
  };

  handleTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  }
 
  handleBodyChange = ({ target }) => {
    this.setState({ body: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    createNote(title, body)
      /* eslint-disable-next-line no-console */
      .then(note => console.log(note));

  }

  render() {
    const { title, body } = this.state;
    return (
      <DisplayForm
        title={title}
        handleTitleChange={this.handleTitleChange}
        body={body}
        handleBodyChange={this.handleBodyChange}
        handleSubmit={this.handleSubmit} />
    );
  }
}
