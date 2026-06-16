interface TitleGameProps {
  title: string;
  age?: number;
}

export function TitleGame({ title, age }: TitleGameProps) {
  return (
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent text-center mb-6">
      {title} {age}
    </h1>
  );
}
