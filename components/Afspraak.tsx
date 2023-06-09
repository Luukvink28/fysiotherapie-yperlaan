
import React, { useState } from 'react';
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';
import nodemailer from 'nodemailer';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundColor: '#104b84',
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: '#8e1a57',
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: '#9e2a67',
    ':hover': {
      backgroundColor: '#8e1a57',
    },
  },

  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'transparent',
      color: '#8e1a57',
    },
  },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function Afspraak() {
  const { classes } = useStyles();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [complaints, setComplaints] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a Nodemailer transporter using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // Set to true if using a secure connection (e.g., with SSL/TLS)
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: 'your-email@example.com',
        to: 'recipient@example.com',
        subject: 'New appointment request',
        text: `
          Name: ${name}
          Email: ${email}
          Complaints: ${complaints}
        `,
      });

      // Clear the form and show a success message
      setEmail('');
      setName('');
      setComplaints('');
      setMessageSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error sending email
    }
  };

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Maak een afspraak</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam expedita quis quibusdam vero. Consequatur
            quisquam perferendis eveniet! Reiciendis, porro amet. Facere, voluptatum? Voluptatem perferendis veritatis
            quaerat! Atque quam ad eligendi.
          </Text>

          <Group mt="xl">
            <Link href="https://www.instagram.com/yperlaanfysiotherapie/">
              <ActionIcon className={classes.link} size="lg">
                <IconBrandInstagram size="1.85rem" />
              </ActionIcon>
            </Link>
          </Group>
        </div>
        <div className={classes.form}>
          {messageSent ? (
            <Text>Message sent successfully!</Text>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <TextInput
                label="Email"
                placeholder="jouw@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Naam"
                placeholder="John Doe"
                mt="md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label="Uw klachten"
                placeholder="Beschrijf uw klachten"
                minRows={4}
                mt="md"
                value={complaints}
                onChange={(e) => setComplaints(e.target.value)}
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </form>
          )}
        </div>
      </SimpleGrid>
    </div>
  );
}
