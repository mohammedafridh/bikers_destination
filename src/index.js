import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { FavoriteBikesProvider } from './store/FavoriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoriteBikesProvider>
        <React.StrictMode>
            <BrowserRouter><App /></BrowserRouter> 
        </React.StrictMode> 
    </FavoriteBikesProvider>   
);