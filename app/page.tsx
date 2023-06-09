"use client";
import { Navbar } from '../components/Navbar'
import { Cards } from '../components/Cards'
import { Footer } from '../components/Footer';
import { Flex } from '@mantine/core';
import { Profiel } from '../components/Profiel';
import { Heroes } from '../components/Heroes';
import { Afpraak } from '../components/Afspraak';



export default function Home() {
  return (
    <>
    <Navbar 
      links = {[
        {
          "link": "/afspraak",
          "label": "Afpraak maken"
        },
        {
          "link": "..//app/specialisaties/page.tsx",
          "label": "Specialisaties"
        }
      ]}
     />
      <Heroes/>
     <Profiel/>

      <Afpraak/>
     <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Cards 
      image='hands.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
           <Cards
      image='lopen.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
           <Cards
      image='stretch.jpg'
      title='Title'
      description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      />
    </Flex>
    <Footer/>

     </>
  )
}


