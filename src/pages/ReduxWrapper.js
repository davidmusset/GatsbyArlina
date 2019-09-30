import React, { Component } from 'react';
import shop from './reducers/shop.reducer'; // importation du shop
import erreur from './reducers/erreur.reducer'; // importation du erreur
import panier from './reducers/panier.reducer'; // importation du erreur
// MECANIQUE REDUX
import {Provider} from 'react-redux';  // importation du provider
import createEngine from 'redux-storage-engine-localstorage';
import {createStore, combineReducers, applyMiddleware}  from 'redux'; // importation du reduceur
import * as storage from 'redux-storage'; // storage
// const store = createStore(combineReducers({shop, erreur,panier})); // Création du store - changement pour applyMiddleware
const reducer = storage.reducer(combineReducers({shop, erreur,panier}));
const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const load = storage.createLoader(engine);
load(store);

// MECANIQUE REDUX


export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
