"use client";
import { createStyles, Container, Group, ActionIcon, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: (50),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image alt='logo' src= 'Logo.png' width={200} height={100} />
            <Group spacing={0} className={classes.links} position="right" noWrap>
      <Link href="https://twitter.com">

          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>

      </Link>
      <Link href="https://youtube.com">

          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>

      </Link>
      <Link href="https://www.instagram.com/yperlaanfysiotherapie/">
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}