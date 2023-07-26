import React from 'react';
import { createStyles, Header, Container, Group, Button, Image } from '@mantine/core';
import Link from 'next/link';

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    zIndex: 99,
  },
  container: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
    cursor: 'pointer',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  button: {
    color: 'white',
    backgroundColor: '#104b84',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      transition: 'all 0.2s ease-in-out',
      backgroundColor: '#5d5d5d',
    },
  },

}));

interface ButtonItem {
  label: string;
  onClick: () => void;
  path: string;
}

interface MantineNavbarProps {
  logoSrc: string;
  buttons: ButtonItem[];
}

export function Navbar({ logoSrc, buttons }: MantineNavbarProps) {
  const { classes } = useStyles();

  const navButtons = buttons.map((button) => (
    <Link key={button.label} href={button.path}>
      <Button className={classes.button} onClick={button.onClick}>{button.label}</Button>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        className={classes.container}
      >
        <Link href="/" passHref>
          <div className={classes.logo}>
            <Image maw={150} alt='Logo' src={logoSrc} />
          </div>
        </Link>
        <Group className={classes.buttons}>{navButtons}</Group>
      </Container>
    </Header>
  );
}
