import Link from "next/link";
import styles from "./Services.module.css";
import SectionHeader from "../section-header/SectionHeader";

export default function Services({ latestServices }) {
  return (
    <section
      className={styles.servicesContainer}
      aria-labelledby="services-section"
    >
      <div className={styles.wrapper}>
        <div className={styles.gradientOverlay}></div>

        <div className={styles.header} aria-live="polite">
          <header className={styles.heading}>
            <SectionHeader
              title="Our Comprehensive Services"
              description="Angelica Uniforms offers complete rental and laundry solutions, including workwear, mats, and towels, tailored to meet the needs of businesses across Adelaide. Our eco-friendly services ensure your uniforms and textiles stay professional and ready for use."
            />
          </header>
        </div>

        <div className={styles.servicesGrid}>
          {latestServices.map((service) => (
            <article
              key={service.filename}
              itemScope
              itemType="https://schema.org/Service"
              className={styles.serviceCard}
            >
              <header>
                <div className={styles.servicesIcon}>
                  <img
                    src={service.thumbnail}
                    alt={`Thumbnail for ${service.title}`}
                    className={styles.icon}
                    width={80}
                    height={80}
                    itemProp="image"
                  />
                </div>
                <h2 itemProp="name">{service.title}</h2>
              </header>
              <p itemProp="description">{service.excerpt}</p>
              <Link
                href={`/services/${service.filename.replace(".md", "")}`}
                passHref
                aria-label={`View details of ${service.title}`}
              >
                <p className={styles.readMore}>View Details</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
