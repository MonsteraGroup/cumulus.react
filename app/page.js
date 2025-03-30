"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [screenSize, setScreenSize] = useState('desktop');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalAnimating, setModalAnimating] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Initial check
      handleResize();

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 480) {
      setScreenSize('xs');
    } else if (width < 768) {
      setScreenSize('sm');
    } else if (width < 1024) {
      setScreenSize('tablet');
    } else {
      setScreenSize('desktop');
    }
  };

  const openContactModal = (e) => {
    e.preventDefault();

    // First set the modal to open (this adds the elements to DOM)
    setContactModalOpen(true);

    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Reset animation state
    setModalAnimating(false);

    // Request animation frame to ensure browser has processed the DOM changes
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Double RAF to ensure the initial state is fully applied
        setModalAnimating(true);
      });
    });
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setModalAnimating(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const isMobile = screenSize === 'xs' || screenSize === 'sm';
  const isTablet = screenSize === 'tablet';

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.year} style={{ display: isMobile || isTablet ? 'none' : 'block' }}>
          {new Date().getFullYear()}
        </div>
        <nav className={styles.navigation}>
          {/* <a href="/about">About</a> */}
          <a href="#" onClick={openContactModal}>Contact</a>
          {/* <a href="/client-portal" className={styles.clientPortal}>Client Portal</a> */}
        </nav>
      </header>

      <main className={`${styles.main} ${isMobile ? styles.mainMobile : ''}`}>
        <div className={`${styles.logoContainer} ${isMobile ? styles.logoContainerMobile : ''} ${isTablet ? styles.logoContainerTablet : ''}`}>
          <Image
            className={styles.logo}
            src="/images/c_stack.svg"
            alt="Cumulus logo"
            id="main-logo"
            width={
              screenSize === 'xs' ? Math.min(350, window.innerWidth * 0.8) : 
              isMobile ? Math.min(260, window.innerWidth * 0.6) : 
              isTablet ? Math.min(240, window.innerWidth * 0.25) : 
              149.92
            }
            height={
              screenSize === 'xs' ? Math.min(90, window.innerWidth * 0.21) : 
              isMobile ? Math.min(62, window.innerWidth * 0.14) : 
              isTablet ? Math.min(60, window.innerWidth * 0.0625) : 
              136.82
            }
            style={{
              marginRight: isMobile || isTablet ? 0 : 0,
              marginBottom: screenSize === 'xs' ? '0.3rem' : (isMobile ? '0.5rem' : (isTablet ? '0.25rem' : 0))
            }}
            priority
          />
          <h1 
            id="main-company-name" 
            className={`${styles.companyName} ${isMobile ? styles.companyNameMobile : ''} ${isTablet ? styles.companyNameTablet : ''}`}
            style={
              screenSize === 'desktop' ? { fontSize: '11.947rem', fontWeight: 400, lineHeight: '229.38px' } : 
              {}
            }
          >
            Cumulus
          </h1>
        </div>

        <div id="tagline" className={`${styles.tagline} ${isMobile ? styles.taglineMobile : ''} ${isTablet ? styles.taglineTablet : ''}`}>
          <div className={styles.taglineContent}>
            <div 
              className={`${styles.taglineText} ${styles.taglineText1}`}
              style={!isMobile && !isTablet ? { 
                fontWeight: 450, 
                fontSize: '6.25rem', 
                lineHeight: '86px', 
                textAlign: 'right' 
              } : {}}
            >
              Solutions
            </div>
            <div 
              className={`${styles.taglineText} ${styles.taglineText2}`}
              style={!isMobile && !isTablet ? { 
                fontWeight: 450, 
                fontSize: '6.25rem', 
                lineHeight: '86px', 
                textAlign: 'right' 
              } : {}}
            >
              at the speed
            </div>
            <div 
              className={`${styles.taglineText} ${styles.taglineText3}`}
              style={!isMobile && !isTablet ? { 
                fontWeight: 450, 
                fontSize: '6.25rem', 
                lineHeight: '86px', 
                textAlign: 'right' 
              } : {}}
            >
              of production.
            </div>
          </div>
        </div>

        {(isMobile || isTablet) && (
          <div className={`${styles.mobileYear} ${isTablet ? styles.tabletYear : ''}`}>
            {new Date().getFullYear()}
          </div>
        )}
      </main>

      {/* Contact Modal */}
      {contactModalOpen && (
        <>
          {/* Modal Backdrop */}
          <div
            className={`${styles.modalBackdrop} ${modalAnimating ? styles.backdropOpen : ''} ${isMobile ? styles.modalBackdropMobile : ''} ${isTablet ? styles.modalBackdropTablet : ''}`}
            onClick={closeContactModal}
          />

          <div
            className={`${styles.contactModal} ${modalAnimating ? styles.modalOpen : ''} ${isMobile ? styles.contactModalMobile : ''} ${isTablet ? styles.contactModalTablet : ''}`}
            onAnimationEnd={() => setModalAnimating(false)}
          >
            {/* Close button */}
            <div className={styles.closeButton} onClick={closeContactModal}>
              <span className={styles.closeText}>
                Close
              </span>
              <span className={styles.closeIcon}>
                ✕
              </span>
            </div>

            {/* Contact Info */}
            <div className={`${styles.contactContent} ${isMobile ? styles.contactContentMobile : ''} ${isTablet ? styles.contactContentTablet : ''}`}>
              {/* Left side - Contact text */}
              <div className={`${styles.contactInfo} ${isMobile ? styles.contactInfoMobile : ''} ${isTablet ? styles.contactInfoTablet : ''}`}>
                Contact
                <br />
                <span className={`${styles.emailInfo} ${isMobile ? styles.emailInfoMobile : ''} ${isTablet ? styles.emailInfoTablet : ''}`}>
                  inquires@
                  <br />
                  cumuluscontent.com
                </span>
              </div>

              {/* Right side - Cumulus logo */}
              <div className={styles.modalLogoContainer}>
                <div>
                  <Image
                    src="/images/c_stack.svg"
                    alt="Cumulus logo"
                    width={screenSize === 'xs' ? 100 : (isMobile ? 130 : (isTablet ? 150 : 235))}
                    height={screenSize === 'xs' ? 80 : (isMobile ? 104 : (isTablet ? 120 : 192.5))}
                  />
                  <div className={`${styles.modalCompanyName} ${isMobile ? styles.modalCompanyNameMobile : ''} ${isTablet ? styles.modalCompanyNameTablet : ''}`}>
                    Cumulus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cumulus",
            "url": "https://cumuluscontent.com",
            "logo": "https://cumuluscontent.com/images/c_stack.svg",
            "description": "Solutions at the speed of production",
            "email": "inquires@cumuluscontent.com",
            "sameAs": [
              "https://linkedin.com/company/cumulus",
              "https://twitter.com/cumulus"
            ]
          })
        }}
      /> */}
    </div>
  );
}
