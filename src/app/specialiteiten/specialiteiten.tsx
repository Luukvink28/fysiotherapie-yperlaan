"use cliant";

import { Navbar } from '../../components/Navbar'


export default function specialiteiten () {
    const handleButtonClick = (label: string) => {
      console.log(`Button "${label}" clicked`);
    };
  
    return (
      <>
        <Navbar
          logoSrc="Logo.png" 
          buttons={[
            { label: 'Home', onClick: () => handleButtonClick('Home'), path: '/' },
            { label: 'About', onClick: () => handleButtonClick('About'), path: '/about' },
            { label: 'Specialiteiten', onClick: () => handleButtonClick('specialiteiten'), path: 'specialiteiten' },
          ]}
        />
        </>
    )}
