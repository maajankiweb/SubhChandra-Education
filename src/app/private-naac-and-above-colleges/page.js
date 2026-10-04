import { CoursePageTemplate } from "@/components/layout/CoursePageTemplate";
import pagesDatabase from "@/data/pages_database.json";

export const metadata = {
  title: "Private NAAC A & Above Colleges | SubhChandra Education",
  description: "Explore top-ranked private universities with NAAC A+ and UGC accreditation across India.",
};

export default function PrivateNaacCollegesPage() {
  const pageData = pagesDatabase["/private-naac-and-above-colleges"] || {
    h1: "Private NAAC A & Above Colleges",
    category: "Accredited Colleges",
    contentHtml: "<p>Discover accredited partner universities offering quality higher education.</p>",
  };

  return <CoursePageTemplate pageData={pageData} />;
}
