import React, { useState } from "react";
import styles from "./card.module.css";
import LoaderPlaceHolder from "../LoaderPlaceHolder/LoaderPlaceHolder";

function Card(props) {
  const [loaded, setLoaded] = useState(false);
  let imgLoadNum = 0;

  const itemLoaded = () => {
    imgLoadNum++;
    if (imgLoadNum < 2) return;

    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {!loaded && (
          <LoaderPlaceHolder
            extraStyles={{
              height: "100%",
            }}
          />
        )}

        <img
          src={props.mainImg}
          alt="card-img"
          className={styles.cardHeaderImg}
          onLoad={itemLoaded}
        />
      </div>

      <div className={styles.cardSub}>
        {!loaded && (
          <LoaderPlaceHolder
            extraStyles={{
              borderRadius: "10px",
              height: "15px",
              marginBottom: "16px",
            }}
          />
        )}
        {loaded && <h3>{props.title}</h3>}

        {Array.from(Array(Math.ceil(props.subTitle.length / 39)).keys()).map(
          () =>
            !loaded && (
              <LoaderPlaceHolder
                extraStyles={{
                  borderRadius: "10px",
                  height: "15px",
                }}
              />
            )
        )}
        {loaded && <p className={styles.infoText}>{props.subTitle}</p>}

        <div className={styles.profile}>
          <div className={styles.profilePhotoContainer}>
            {!loaded && <LoaderPlaceHolder extraStyles={{ height: "100%" }} />}

            <img
              src={props.profilePic}
              alt="creator's pic"
              className={styles.profilePhoto}
              onLoad={itemLoaded}
            />
          </div>

          <div>
            {!loaded && (
              <LoaderPlaceHolder
                extraStyles={{
                  borderRadius: "10px",
                  width: "150px",
                  height: "15px",
                  margin: "4px 0",
                }}
              />
            )}

            {loaded && <p className={styles.profileName}>{props.author}</p>}

            {!loaded && (
              <LoaderPlaceHolder
                extraStyles={{
                  borderRadius: "10px",
                  width: "130px",
                  height: "15px",
                  margin: "4px 0",
                }}
              />
            )}
            {loaded && <p className={styles.profileDate}>{props.date}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
