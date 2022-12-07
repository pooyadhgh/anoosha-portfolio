import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PortfolioHero.module.scss";
import heroImage from "../../assets/images/portfo-hero.png";

const PortfolioHero = () => {
  return (
    <>
      <Row lg='2' className={styles.container}>
        <Col lg>
          <Container className={styles.imageContainer}>
            <Image alt='UI/UX Design' src={heroImage} fill />
          </Container>
        </Col>

        <Col lg>
          <Container className={styles.textContainer}>
            <h1>Portfolio</h1>
            <p>You can find my portfolio here.</p>
          </Container>
        </Col>
      </Row>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis
          nesciunt nobis sunt? Obcaecati ad labore nam aliquid atque id odio
          esse earum iusto, ea, temporibus asperiores dolores distinctio.
          Dolores sint iusto labore corrupti fugiat illum cumque a quae
          praesentium voluptates culpa dignissimos ut adipisci ullam doloribus
          magnam quidem, veritatis quaerat quos quod. Nemo, nihil. Quibusdam eos
          veniam cum, tempore adipisci atque ipsam at sunt praesentium rem ullam
          optio labore nobis quisquam? Recusandae rem velit illum dignissimos,
          similique amet voluptas officiis voluptates, laudantium nisi
          repellendus tempora, ex suscipit commodi eveniet pariatur unde.
          Pariatur dolor omnis inventore rem, recusandae commodi maiores
          obcaecati voluptatem sed, odit fuga sapiente ipsam accusantium culpa
          adipisci consequuntur deleniti nulla ullam illum officiis sunt
          possimus impedit? Aliquam corrupti dolorem officia doloremque
          deleniti? Nihil eius aspernatur dolores sapiente quod ipsa molestiae
          ratione similique nostrum beatae? Facilis nihil aliquam nemo ipsum
          reiciendis quaerat ipsam placeat libero eligendi non, quibusdam
          explicabo pariatur, necessitatibus a eaque quisquam dolor animi
          aperiam ad. Impedit tempora atque est aliquam ipsam quia sint!
          Architecto, cupiditate totam odio, ullam corrupti possimus accusamus
          harum tenetur nesciunt reiciendis adipisci similique, dicta est ut
          aliquid deserunt consequuntur cumque quidem? Officiis laboriosam
          commodi architecto? Autem modi saepe et sed quasi!
        </p>
      </Container>
    </>
  );
};

export default PortfolioHero;
