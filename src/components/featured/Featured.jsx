import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, my name is LILbossX!</b> the real boss x hehe!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Titleeeeeeeeeeeeee</h1>
          <p className={styles.postDesc}>
            descript ionnnn nnnnn nnnnn nnnn nnnnn nnnnn nnnn nnnnnn nnnnnn nnnnnn
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
