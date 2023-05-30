"use client";
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { Contact } from '@/components/Contact'
import { Cards } from '@/components/Cards'
import { Footer } from '@/components/Footer';

import { Flex } from '@mantine/core';



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
          "link": "/learn",
          "label": "Contact"
        }
      ]}
     />
     <Hero/>
     <Profile/>
     <Contact/>
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


