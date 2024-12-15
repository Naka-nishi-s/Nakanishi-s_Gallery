"use client";

import dynamic from "next/dynamic";
import { Caveat } from "next/font/google";
import animationJson from "../public/data.json";
import styles from "./page.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Caveat400 = Caveat({
  weight: "400",
  preload: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={Caveat400.className}>{"Nakanishi's"}</h1>
        <h1 className={Caveat400.className}>Gallery</h1>
      </div>
      <div>
        <a href="/about-me">About me</a>
        <a href="">Achievement</a>
      </div>
      <div style={{ width: "60%", height: "auto" }}>
        <Lottie animationData={animationJson} />
      </div>
    </main>
  );
}
