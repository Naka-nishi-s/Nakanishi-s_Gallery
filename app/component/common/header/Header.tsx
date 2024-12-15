"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  // MenuのOpen状態を管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pathを検知
  const pathName = usePathname();
  // Pathが変わる度、MenuをCloseする
  useEffect(() => {
    handleCloseMenu();
  }, [pathName]);

  /** MenuをOpen状態に変更 */
  const handleOpenMenu = () => {
    setIsMenuOpen((openState) => true);
  };

  /** MenuをClose状態に変更 */
  const handleCloseMenu = () => {
    setIsMenuOpen((openState) => false);
  };

  // MenuのList
  const MENU_LIST = [
    { title: "About me", link: "/about-me" },
    { title: "できること", link: "/can-do" },
    { title: "料金", link: "/price" },
    { title: "納品実績", link: "/Achievement" },
  ];

  /** バブリング防止 */
  const stopPropagation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <div className={styles.header__image}>
            <Image
              src="/logo.svg"
              alt="Nakanishiのロゴ画像"
              width={100}
              height={100}
              sizes="100vw"
            />
          </div>
        </Link>
        <button className={styles.hamburger} onClick={handleOpenMenu}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </header>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={handleCloseMenu}>
          <button className={styles.hamburger} onClick={handleCloseMenu}>
            <span className={`${styles.line} ${styles.close}`}></span>
            <span className={`${styles.line} ${styles.close}`}></span>
          </button>
          <nav className={styles.menu}>
            <ul>
              {MENU_LIST.map((menu) => (
                <Link
                  href={menu.link}
                  key={menu.title}
                  onClick={(e) => stopPropagation(e)}
                >
                  <li>{menu.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
