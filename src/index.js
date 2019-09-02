import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Grafico from './componentes/graficoTable';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Grafico />, document.getElementById('root'));

serviceWorker.unregister();
