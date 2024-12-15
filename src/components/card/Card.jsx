import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Est eiusmod pariatur in dolor dolore nisi esse.</h1>
        </Link>

        <p className={styles.desc}>
          Est duis eiusmod laborum amet. Aliquip et veniam proident commodo
          ipsum. Adipisicing consectetur nisi ipsum ut officia. Labore
          adipisicing voluptate id voluptate proident nisi incididunt sit
          consectetur est est. Elit culpa fugiat est consectetur amet.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
