import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [shouldShowCanvas, setShouldShowCanvas] = useState(false);

  const handleCloseCanvas = () => {
    setShouldShowCanvas(false);
  };

  const handleShowCanvas = () => {
    setShouldShowCanvas(true);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleCloseCanvas);

    return () => {
      router.events.off("routeChangeStart", handleCloseCanvas);
    };
  }, []);

  return (
    <>
      <Navbar expand={false} className='mb-3 p-5'>
        <Container fluid>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar-expand-false'
            onClick={handleShowCanvas}
            className={styles.toggleButton}
          />
          <Link href='/' passHref>
            <Navbar.Brand>
              <Image
                src={"/images/logo.png"}
                width='64'
                height='69'
                alt='Anoosha Niki Home Page'
              />
            </Navbar.Brand>
          </Link>
          <div>social media logos</div>
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-false'
            aria-labelledby='offcanvasNavbar-expand-false'
            placement='start'
            onHide={handleCloseCanvas}
            show={shouldShowCanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbar-expand-false-header' />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Link href='/' passHref>
                  <Nav.Link as='span'>Home</Nav.Link>
                </Link>

                <Link href='/portfolio' passHref>
                  <Nav.Link as='span'>Portfolio</Nav.Link>
                </Link>

                <Link href='/about' passHref>
                  <Nav.Link as='span'>About Me</Nav.Link>
                </Link>

                <Link href='/contact' passHref>
                  <Nav.Link as='span'>Contact Me</Nav.Link>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
