
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
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Ad adipisicing esse enim qui pariatur pariatur irure exercitation
            aliqua. Culpa sint elit nulla id voluptate. Proident exercitation
            veniam ex minim nulla minim id est. Aliquip consequat non dolore
            voluptate eiusmod. Excepteur excepteur ullamco proident minim nisi
            ipsum esse ad magna consectetur. In Lorem do elit ut.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
