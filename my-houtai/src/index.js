import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/reset/reset.css'
//import memoryutils from './pages/utils/memoryutils';
///import stroogeutils from './pages/utils/stroogeutils'

//保存loacl中保存user， 保存内存中
//const user=stroogeutils.getUser()
//memoryutils.user=user

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

