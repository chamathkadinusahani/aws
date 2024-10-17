import React from "react";
import { Link } from 'react-router-dom';
import Card from "./Card";
import styles from "./MyComponent.module.css";

const cardsData = [
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd5337281dc8b84da5a6add780c10318ad2a97c51dcef4e95fb11d109a8be487?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5", buttonText:<Link to="/login7"> As a school </Link> },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6681b1fd006f251052757316b6c4beb96c1950572af9e5050ed97aaf19fbe1cd?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5", buttonText: <Link to="/login5">As a mass institute</Link> },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/371f729656fdc54b543b3b8a8f6687df83c2552fe2e146e56ce5d0d2322f3f1e?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5", buttonText:<Link to="/login6">As a small institute</Link> },
];

const MyComponent = () => (
  <div className={styles.payments}>
    <h1 className={styles.h1}>Register</h1>
    <section className={styles.mainSection}>
      <div className={styles.flexContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} imageSrc={card.imageSrc} buttonText={card.buttonText} />
        ))}
      </div>
    </section>
    
  </div>
);

export default MyComponent;