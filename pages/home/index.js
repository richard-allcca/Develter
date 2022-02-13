import Devit from "components/Devit/indes";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

const HomePage = () => {
  const [timeLine, setTimeLine] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeLine);
  }, []);

  return (
    <>
      <div>
        <header className={styles.head}>
          <h2 className={styles.h2}>Inicio</h2>
        </header>
        <section className={styles.section}>
          {timeLine.map(({ id, username, avatar, message }) => {
            return (
              <Devit
                key={id}
                id={id}
                avatar={avatar}
                message={message}
                user={username}
              />
            );
          })}
        </section>
        <nav className={styles.nav}>
          <h3>navegacion</h3>
        </nav>
      </div>
    </>
  );
};

export default HomePage;
