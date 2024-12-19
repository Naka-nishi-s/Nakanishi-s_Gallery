"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";
import animationJson from "../public/data.json";
import { Caveat400 } from "./component/font/caveat";
import styles from "./page.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={`${styles.title} fadeIn`}>
        <h1 className={Caveat400.className}>{"Nakanishi's"}</h1>
        <h1 className={Caveat400.className}>Gallery</h1>
      </div>

      <div className={styles.balloons}>
        <div
          style={{ "--delay": "1.6s" } as CSSProperties}
          className={`${styles.balloons__balloon} fall`}
        >
          <a href="/about-me">About me</a>
        </div>
        <div
          style={{ "--delay": "2s" } as CSSProperties}
          className={`${styles.balloons__balloon} fall`}
        >
          <a href="#">Achievement</a>
        </div>
      </div>

      <div
        style={{ "--delay": "0.6s" } as CSSProperties}
        className={`${styles.work} fadeIn`}
      >
        <Lottie animationData={animationJson} />
      </div>
    </div>
  );
}
