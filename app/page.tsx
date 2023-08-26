"use client";

import { useEffect } from "react";
import Image from "next/image"
import TagManager from "react-gtm-module";

import { places } from "./data";

export default function Home() {
  const styles = {
    container: {
      maxWidth: 1080,
      margin: "0 auto",
    },
    color: {
      primary: "#1e9dc4",
      secondary: "#ee343f",
    },
  };

  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-MZTCCKMH",
    });
  });

  return (
    <main>
      <header
        style={{
          borderBottom: `1px solid ${styles.color.primary}`,
          padding: 20,
        }}
      >
        <h1 style={styles.container}>
          <span style={{ color: styles.color.primary }}>Chicago</span>{" "}
          <span style={{ color: styles.color.secondary }}>Food</span>
        </h1>
      </header>
      <div>
        <div style={styles.container}>
          {places.map((place, index) => (
            <div key={index}>
              <h2>{place.name}</h2>
              {place.description?.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              {place.image && <Image src={place.image} alt={place.name} width={400} height={400} />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
