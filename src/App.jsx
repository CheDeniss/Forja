import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import './styles/App.css';
import Footer from './components/Footer/footer.jsx';
import Navigation from './components/Navigation/navigation.jsx';
import Homepage from './components/Homepage/homepage.jsx';
import Header from './components/Header/header.jsx';
import {healthCheck} from "./services/authService.js";
import PrivateRoute from "./helpers/PrivateRoute.jsx";
import Securedpage from "./pages/Securedpage.jsx";
import './styles/fonts.css';
//import Catalog from './components/Catalog/catalog.jsx';
//import Profile from './components/Profile/profile.jsx';
//import Auth from './components/Auth/auth.jsx';

function App() {
    const [healthStatus, setHealthStatus] = useState('');

    // Функція для перевірки API здоров'я
    const checkHealth = async () => {
        try {
            const response = await healthCheck(); // Викликаємо функцію перевірки здоров'я
            setHealthStatus(response.data.status); // Зберігаємо статус у стані
        } catch (error) {
            setHealthStatus('error');
        }
    };


    return (
        // <Router>
        //     <Navigation onTestClick={checkHealth}/>
        //     <Routes>
        //         <Route path="/" element={<Homepage healthStatus={healthStatus}/>} />
        //         {/*<Route path="/catalog" element={<Catalog />} />*/}
        //         {/*<Route path="/profile" element={<Profile />} />*/}
        //         {/*<Route path="/auth" element={<Auth />} />*/}
        //     </Routes>
        //     <Footer />
        // </Router>

    <ReactKeycloakProvider authClient={keycloak}>
        <React.StrictMode>
            <Navigation onTestClick={checkHealth}/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route
                        path="/secured"
                        element={
                            <PrivateRoute>
                                <Securedpage />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </ReactKeycloakProvider>
    );
}

export default App;
