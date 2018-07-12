import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import KennelCompany from './KennelCompany';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
(<Router>
    <KennelCompany />
</Router>
), document.getElementById('root'));

registerServiceWorker();
