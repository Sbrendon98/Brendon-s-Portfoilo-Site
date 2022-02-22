import Link from "next/link";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        Welcome to The About Page!
        <div className={styles.card}>
          <Link href="/">Return Home</Link>
        </div>
      </main>
    </div>
  );
};

export default About;
