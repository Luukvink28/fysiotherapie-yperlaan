"use client";

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { FormField } from '../../components/FormField';



export default function Contact() {
    const handleButtonClick = (label: string) => {
        console.log(`Button "${label}" clicked`);
      };    
    return (
        <>
        <Navbar
          logoSrc="Logo.png" 
          buttons={[
            { label: 'Home', onClick: () => handleButtonClick('Home'), path: '/' },
            { label: 'Contact', onClick: () => handleButtonClick('Contact'), path: '/contact' },
            { label: 'Specialiteiten', onClick: () => handleButtonClick('specialiteiten'), path: '/specialiteiten' },
          ]}
        />
        <FormField></FormField>
        <Footer></Footer>
    </>
    )}