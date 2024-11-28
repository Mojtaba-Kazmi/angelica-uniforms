import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ";
import PageHeader from "@/components/page-header/PageHeader";
import { welcomeData } from "@/content/data/about/welcome-data";
import { whyChooseData } from "@/content/data/about/why-choose";


// export async function generateMetadata() {
//   return generatePageMetadata({
//     title:
//       "",
//     description:
//       "",
//   });
// }

export default function AboutPage() {
  // const faqSchema = getFaqSchema();

  return (
    <>
      {/* Inject JSON-LD Schemas */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      /> */}
      <PageHeader
        title="About Angelica Uniforms"
        description="Based in Adelaide, South Australia, Angelica Uniforms leads the industry in providing top-tier laundry and uniform rental services. Known for reliable and timely deliveries, we pride ourselves on offering tailored solutions that meet the diverse needs of our clients."
        breadcrumb="About Page"
      />
      <About welcomeData={welcomeData} whyChooseData={whyChooseData} />
      <FAQ />
    </>
  );
}
