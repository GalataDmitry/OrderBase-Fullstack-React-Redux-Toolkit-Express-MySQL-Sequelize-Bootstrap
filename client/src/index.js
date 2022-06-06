import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './components/App'
import store from "./toolkit/store/store"
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import AllClientInfo from "./components/AllClientInfo";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/client_all_info/:clientId" element={<AllClientInfo/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>)