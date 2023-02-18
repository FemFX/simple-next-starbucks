import React, { FC, ReactNode } from "react";
import Meta from "./meta/Meta";
import styles from "./Layout.module.scss";
import Header from "./header/Header";

const Layout: FC<any> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />

      <Header />
      <main>
        <section className={styles.content}>{children}</section>
      </main>
    </>
  );
};

export default Layout;
