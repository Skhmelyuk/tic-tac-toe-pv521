import { Heading } from "@chakra-ui/react";

interface TitleGameProps {
  title: string;
  age?: number;
}

export function TitleGame({ title, age }: TitleGameProps) {
  return (
    <Heading
      as="h1"
      size="xl"
      mb={6}
      textTransform="uppercase"
      letterSpacing="2px"
      bgGradient="linear(to-r, #2c3e50, #3498db)"
      bgClip="text"
      textAlign="center"
    >
      {title} {age}
    </Heading>
  );
}

