import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our expert team at Angelica Uniforms for high-quality uniform and laundry services. We’re here to help with all your laundry and uniform care needs."
        breadcrumb="Contact Us"
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
