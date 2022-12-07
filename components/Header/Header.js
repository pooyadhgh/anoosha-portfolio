import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { List, X } from "react-bootstrap-icons";
import { SocialMedia } from "../SocialMedia";
import IS_CLIENT from "../../utils/isClient";
import useBreakpoint from "../../hooks/useBreakpoint";
import styles from "./Header.module.scss";
import { BREAKPOINTS, LINKS } from "../../constants";
import logo from "../../assets/images/logo.png";

const logoa = {
  link: "/",
  alt: "Anoosha Niki",
  url: "/images/logo.png",
};

const Header = () => {
  const router = useRouter();
  const [shouldShowCanvas, setShouldShowCanvas] = useState(false);
  const breakpoint = IS_CLIENT ? useBreakpoint() : "";
  const isMobile =
    breakpoint === BREAKPOINTS.XSMALL || breakpoint === BREAKPOINTS.SMALL;

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
    <Container fluid as='header'>
      <Navbar expand={false} className={styles.navbar}>
        <Navbar.Toggle
          aria-controls='offcanvasNavbar-expand-false'
          onClick={handleShowCanvas}
          className={styles.toggleButton}
        >
          <List className={styles.toggleButton} />
        </Navbar.Toggle>

        <Link href='/' passHref>
          <Navbar.Brand>
            <Image
              src={logo}
              width={isMobile ? 32 : 42}
              height={isMobile ? 35 : 46}
              alt='Anoosha Niki'
            />
          </Navbar.Brand>
        </Link>

        {!isMobile && <SocialMedia />}

        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-false'
          aria-labelledby='offcanvasNavbar-expand-false'
          placement='start'
          onHide={handleCloseCanvas}
          show={shouldShowCanvas}
        >
          <Offcanvas.Header>
            <button onClick={handleCloseCanvas} className={styles.closeButton}>
              <X aria-label='Toggle Navbar' />
            </button>
            <Offcanvas.Title id='offcanvasNavbar-expand-false-header' />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav>
              {LINKS.map((navItem) => (
                <Link
                  key={navItem.id}
                  href={navItem.link}
                  className={styles.navItem}
                  passHref
                >
                  <Nav.Link as='span'>{navItem.label}</Nav.Link>
                </Link>
              ))}

              {isMobile && <SocialMedia className={styles.canvasSocialMedia} />}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </Container>
  );
};

export default Header;
