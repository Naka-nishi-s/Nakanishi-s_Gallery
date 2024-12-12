"use client";

import Lottie from "lottie-react";
import animationJson from "../public/data.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>aaa</div>
      <div style={{ width: "60%", height: "auto" }}>
        <Lottie animationData={animationJson} />
      </div>
    </main>
  );
}
