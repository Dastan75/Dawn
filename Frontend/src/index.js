import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './_helpers';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './global.scss';
import { toast } from 'react-toastify';
toast.configure();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
