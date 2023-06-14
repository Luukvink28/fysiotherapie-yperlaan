"use client";
import React from 'react';
import { Container, Grid, SimpleGrid, useMantineTheme, Title, Text, Box, Center, Image, createStyles } from '@mantine/core';

export function Profiel() {
  const theme = useMantineTheme();
  const useStyles = createStyles((theme) => ({
    title: {
      color: "#9e2a67",
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      lineHeight: 1.05,

    },
    description: {
      color: theme.black,
      maxHeight: (500),
    }
    }));
    const { classes } = useStyles();

  return (
    <Container my="xl" maw={1150}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'xl', cols: 1 }]}>

        <Center>
      <Image src='jorrit.jpg' alt='jorrit'  height={500} radius='md'></Image>
      </Center>
        <Grid gutter="md">
          <Grid.Col>
          <Box sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        maxheight: "25rem",
      })}>
              <Title className={classes.title} >Over mij</Title>
              <br />

            <Text className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum quibusdam nobis adipisci molestias ipsam id natus iusto modi, commodi expedita sit nesciunt porro placeat a, amet ipsum? Quia, minus?</Text>
            </Box>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}