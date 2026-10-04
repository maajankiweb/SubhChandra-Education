import { CoursePageTemplate } from "@/components/layout/CoursePageTemplate";
import pagesDatabase from "@/data/pages_database.json";

export const metadata = {
  title: "Terms and Conditions | SubhChandra Education",
  description: "Terms and conditions, privacy guidelines, and service agreements of SubhChandra Education.",
};

export default function TermsPage() {
  const pageData = pagesDatabase["/terms-and-condition"] || {
    h1: "Terms & Conditions",
    category: "Legal",
    contentHtml: "<p>Terms and conditions for SubhChandra Education counseling services.</p>",
  };

  return <CoursePageTemplate pageData={pageData} />;
}
