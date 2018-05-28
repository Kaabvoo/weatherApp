import React from 'react';
import ReactDOM from 'react-dom';
import Modelo from './modelo';

it('renders without crashing', () => {
    const div = document.createElement('div');
  ReactDOM.render(<Modelo />, div);
  ReactDOM.unmountComponentAtNode(div);
});