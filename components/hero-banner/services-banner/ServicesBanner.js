import Link from "next/link";
import { servicesBanner } from "@/content/data/hero-banner/services-banner";
import styles from "./ServicesBanner.module.css";

const ServicesBanner = () => {
  return (
    <section className={styles.serviceContainer} aria-label="Our Services">
      <div className={styles.serviceItemsWrapper}>
        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgLinenUrl}
            alt="Linen"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Linen</p>
        </div>

        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgMatsUrl}
            alt="Premium Mats services"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Mats</p>
        </div>

        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgWorkWearUrl}
            alt="Workwear"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Workwear</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href={servicesBanner.ctaHref} passHref>
          <span
            className={styles.btnGetQuote}
            role="link" // Use "link" role to make it clear it's a link
            tabIndex="0"
            aria-label="Get a Quote" // Provide an accessible name
          >
            {servicesBanner.ctaText}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ServicesBanner;
