import Image from "next/image";
import { Subject } from "../component/common/subject/Subject";
import styles from "./page.module.css";

export default function AboutMe() {
  return (
    <div>
      <Subject subjects={["About", "me"]} />
      <div className={styles.image}>
        <Image
          src={"/cat.svg"}
          alt="プロフィール画像"
          width={100}
          height={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.introduce}>
        {
          "ITエンジニア。\n\n大学卒業後、技術派遣会社に3年間従事。\n主にシステム開発を担当。\n\n（略歴）\n大手ゲーム会社にて\nフロントエンド画面の開発・保守（1年半）\n\n大手人材会社にて\n業務改善のR&D（1年半）\n\n空き時間に副業として、Webサイト制作やシステム開発を担当。\n\n\n「お金より面白さ」をモットーにしており、面白そうだと思ったお仕事は安価で請け負うこともしばしば。\n\n個人活動としても、Webアプリやスマホアプリなど、様々なものを作りリリースしている。"
        }
      </div>
    </div>
  );
}
