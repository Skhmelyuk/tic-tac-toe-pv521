interface TitleGameProps {
  title: string;
  age?: number;
}

export function TitleGame({ title, age }: TitleGameProps) {
  return (
    <h1 className="text-center text-uppercase fw-bold text-secondary mb-4">
      {title} {age}
    </h1>
  );
}

