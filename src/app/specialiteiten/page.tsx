"use client";
import { Footer } from '@/components/Footer';
import { Navbar } from '../../components/Navbar'
import { SpeciaCard } from '@/components/SpeciaCard';
import { Flex } from '@mantine/core';

export default function Specialiteiten() {
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
        <Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
              >
<SpeciaCard 
      image='hands.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
           <SpeciaCard 
      image='lopen.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
           <SpeciaCard 
      image='stretch.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
      </Flex>
      
      <Flex
              mih={50}
              gap="md"
              justify="center"
              align="center"
              direction="row"
              wrap="wrap"
              >
<SpeciaCard 
      image='hands.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
           <SpeciaCard 
      image='lopen.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
           <SpeciaCard 
      image='stretch.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
      </Flex>
        <Footer></Footer>
        </>
    
    )}