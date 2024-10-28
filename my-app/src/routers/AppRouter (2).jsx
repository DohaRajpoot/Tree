import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import PrivateRoute from './PrivateRoute';    // Importing the updated PrivateRoute component
import routes from '../helper/routes';
// import Home from '../pages/Home';
import Home from '../Components/Home';
import Services from '../Components/Services';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import Detection from '../pages/Detection';
import Precaution from '../pages/Precaution';
import EducationalHub from '../pages/EducationalHub';
import ECommerce from '../pages/ECommerce';
import Treatment from '../pages/Treatment';
import Login from '../Components/Login/Login';
import RegisterForm from '../Components/Signup/RegisterForm';
import { AuthProvider } from '../auth/useAuth'; // Importing the AuthProvider

function AppRouter() {
    return (
        <Router>
            <AuthProvider> {/* Wrapping the application with AuthProvider */}
                <Nav />
                <div className='App'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/services" element={
                            <PrivateRoute>
                                <Services />
                            </PrivateRoute>
                        } />
                        <Route path="/about" element={
                                <AboutUs />
                        } />
                        <Route path="/contact" element={
                                <ContactUs />
                        } />
                        <Route path="/detection" element={
                            <PrivateRoute>
                                <Detection />
                            </PrivateRoute>
                        } />
                        <Route path="/precaution" element={
                            <PrivateRoute>
                                <Precaution />
                            </PrivateRoute>
                        } />
                        <Route path="/educationalhub" element={
                            <PrivateRoute>
                                <EducationalHub />
                            </PrivateRoute>
                        } />
                        <Route path="/ecommerce" element={
                            <PrivateRoute>
                                <ECommerce />
                            </PrivateRoute>
                        } />
                        <Route path="/treatment" element={
                            <PrivateRoute>
                                <Treatment />
                            </PrivateRoute>
                        } />
                    </Routes>
                </div>
                <Footer />
            </AuthProvider>
        </Router>
    );
}

export default AppRouter;
