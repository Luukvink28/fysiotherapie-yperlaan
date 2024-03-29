"use client";
import React from 'react';
import { createStyles, Container, Title, Text, Button, rem } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),
    color: theme.white,
    backgroundColor: '#9e2a67',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      backgroundColor: '#5d5d5d',
    },

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function Heroes() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
              >
                Vallen en opstaan
              </Text>{' '}
              Staan en opvallen 
            </Title>

            <Text className={classes.description} mt={30}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa adipisci ratione vel inventore nisi nostrum optio, id cum quia totam ad atque! Ipsa officiis rem necessitatibus illo provident tempora omnis.
            </Text>
            <Link href="/contact">
            <Button
              size="xl"
              radius="md"
              className={classes.control}
              mt={40}
              >
              Maak een afspraak
            </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}