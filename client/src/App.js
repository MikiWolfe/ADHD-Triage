import React, { useState } from "react";
import Nav from './components/Nav/Nav'
import Home from './pages/Homepage/Home'
import ADHD from './pages/ADHD/ADHD'
import Footer from './components/Footer/Footer'
export default function App() {
    return (
        <div>
        {/* <Nav /> */}
        <Home />
        <ADHD />
        <Footer />
</div>
    )
}
