import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {FavoritesManager} from './store/FavoriteContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesManager>
    <React.StrictMode>
        <BrowserRouter><App /></BrowserRouter> 
    </React.StrictMode> 
    </FavoritesManager> 
);