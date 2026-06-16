import styles from "./TitleGame.module.css";

interface TitleGameProps {
  title: string;
  age?: number;
}

export function TitleGame({ title, age }: TitleGameProps) {
  return (
    <h1 className={styles.title}>
      {title} {age}
    </h1>
  );
}

