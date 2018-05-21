import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './cardList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
