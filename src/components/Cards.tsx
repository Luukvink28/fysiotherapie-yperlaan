"use client";
import {
  Card,
  Image,
  Text,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colors.gray[1],
    width: '30.33%',
    height: '330px',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },
 
  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  };


export function Cards({
  className,
  image,
  title,
  description,
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx, theme } = useStyles();

  return (
    <Card withBorder radius="md" mt={30} mb={0} className={cx(classes.card, className)} {...others}>
      <Card.Section>
          <Image alt='img' src={image} height={180} />
      </Card.Section>

      <Text className={classes.title} fw={500} component="a">
        {title}
      </Text>

      <Text fz="sm" color="gray" lineClamp={4}>
        {description}
      </Text>


    </Card>
  );
}