"use client";
import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
      boxSizing: 'border-box',
        backgroundColor: '#104b84',
      borderRadius: theme.radius.md,
      padding: `calc(${theme.spacing.xl} * 2.5)`,
        padding: `calc(${theme.spacing.xl} * 1.5)`,
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: 'white',
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
    backgroundColor: 'white',
    padding: rem(30),
    borderRadius: theme.radius.md,
  },

  social: {
    color: theme.colors.white,
    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[4],
    color: theme.colors.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.colors.black,
  },

  control: {
    backgroundColor: '#104b84',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      backgroundColor: '#5d5d5d',
    },
  },

  formLabel: {
    color: theme.colors[theme.primaryColor][4],
    fontWeight: 'bold',
    marginBottom: rem(8),
  },
}));

const social = [IconBrandInstagram];

export function Afspraak() {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Maak een afspraak</Title>
          <Text className={classes.description} mt="sm" mb={30}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam expedita quis quibusdam vero. Consequatur quisquam perferendis eveniet! Reiciendis, porro amet. Facere, voluptatum? Voluptatem perferendis veritatis quaerat! Atque quam ad eligendi.
          </Text>


          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <form target="_blank" action="https://formsubmit.co/Luukvink@icloud.com" method="POST">
            <label className={classes.formLabel}></label>
            <TextInput
              label="Uw naam"
              name="name"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              type="email"
              label="Email"
              name="email"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Uw klachten"
              name="message"
              rows={10}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Verstuur
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  );
}
