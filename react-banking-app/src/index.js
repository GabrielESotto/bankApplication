import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ReqBalanceProvider } from './context/ReqBalanceContext';
import { ReqLoginProvider } from './context/ReqLoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <AuthProvider>
                <ReqLoginProvider>
                    <ReqBalanceProvider>
                        <ReqBalanceProvider>
                            <App />
                        </ReqBalanceProvider>
                    </ReqBalanceProvider>
                </ReqLoginProvider>
            </AuthProvider>
        </BrowserRouter>
);
