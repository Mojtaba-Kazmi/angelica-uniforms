import ContactForm from "@/components/form/ContactForm";
import PageHeader from "@/components/page-header/PageHeader";

const GetFreeQuotePage = () => {
  return (
    <>
      <PageHeader
        title="Get Free Quote"
        description="Request a free quote for expert uniform and laundry services. Our team is ready to provide you with a personalized estimate tailored to your needs."
        breadcrumb="Get Free Quote"
      />
      <ContactForm />
    </>
  );
};

export default GetFreeQuotePage;
