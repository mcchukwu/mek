import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import { FindMechanics } from '../pages/FindMechanics';
import { About } from '../pages/About';
import { SignIn } from '../pages/SignIn';
import { Register } from '../pages/Register';
import { MechanicRegistration } from '../pages/MechanicRegistration';
import { OwnerRegistration } from '../pages/OwnerRegistration';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/mechanics" element={<FindMechanics />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/mechanic" element={<MechanicRegistration />} />
      <Route path="/register/owner" element={<OwnerRegistration />} />
    </Routes>
  );
}