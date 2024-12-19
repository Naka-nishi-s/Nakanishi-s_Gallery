import { Caveat400 } from "../../font/caveat";
import styles from "./Subject.module.css";

type Subjects = {
  subjects: string[];
};

export const Subject = ({ subjects }: Subjects) => {
  return (
    <div className={styles.subject}>
      <div className={styles.subject__title}>
        {subjects.map((subject, index) => (
          <h1
            key={index}
            className={`${Caveat400.className} fadeIn ${
              subject === "me" && styles.blue
            } `}
          >
            {subject}
          </h1>
        ))}
      </div>
    </div>
  );
};
