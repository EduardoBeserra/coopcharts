import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grafico from './componentes/graficoteste';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Grafico />, document.getElementById('root'));

serviceWorker.unregister();
