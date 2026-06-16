interface TitleGameProps {
  title: string;
  age?: number;
}

export function TitleGame({ title, age }: TitleGameProps) {
  return (
    <h1 className="game__title">
      {title} {age}
    </h1>
  );
}

