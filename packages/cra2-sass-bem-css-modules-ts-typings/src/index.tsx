import React from 'react';
import { render } from 'react-dom';
import { Header } from './header/header';

export const App = () => <Header />;

render(<App />, document.getElementById('root'));
