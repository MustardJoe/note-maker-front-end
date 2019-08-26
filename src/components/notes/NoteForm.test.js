import React from 'react';
import { shallow } from 'enzyme';
import DisplayForm from './NoteForm';

describe('NoteForm component', () => {
  it('renders NoteForm', () => {
    const wrapper = shallow(<DisplayForm
      title="My Title"
      handleTitleChange={() => { }}
      body="My really good note"
      handleBodyChange={() => { }}
      handleSubmit={() => { }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
