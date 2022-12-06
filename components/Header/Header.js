import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { List, X } from "react-bootstrap-icons";
import { SocialMedia } from "../SocialMedia";
import IS_CLIENT from "../../utils/isClient";
import useBreakpoint, { BREAKPOINTS } from "../../hooks/useBreakpoint";
import styles from "./Header.module.scss";
import { LINKS } from "../../constants";

const logo = {
  link: "/",
  alt: "Anoosha Niki Home Page",
  url: "/images/logo.png",
  id: "logo",
};

const Header = () => {
  const router = useRouter();
  const [shouldShowCanvas, setShouldShowCanvas] = useState(false);
  const breakpoint = IS_CLIENT ? useBreakpoint() : "";
  const isMobile = breakpoint === BREAKPOINTS.SMALL;

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
    <header>
      <Navbar expand={false} className={styles.navbar}>
        <Container fluid>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar-expand-false'
            onClick={handleShowCanvas}
            className={styles.toggleButton}
          >
            <List className={styles.toggleButton} />
          </Navbar.Toggle>

          <Link href={logo.link} passHref>
            <Navbar.Brand>
              <Image
                src={logo.url}
                width={isMobile ? 32 : 42}
                height={isMobile ? 35 : 46}
                alt={logo.alt}
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
              <button
                onClick={handleCloseCanvas}
                className={styles.closeButton}
              >
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

                {isMobile && (
                  <SocialMedia className={styles.canvasSocialMedia} />
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
