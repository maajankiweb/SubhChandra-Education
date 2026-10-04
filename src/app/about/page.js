import { CoursePageTemplate } from "@/components/layout/CoursePageTemplate";
import pagesDatabase from "@/data/pages_database.json";

export const metadata = {
  title: "About Us | SubhChandra Education - Right course. Right career.",
  description:
    "Learn about SubhChandra Education, our mission to guide 50,000+ students, partner universities, and expert career counselling across Bihar and India.",
};

export default function AboutPage() {
  const pageData = pagesDatabase["/about"] || {
    h1: "About SubhChandra Education",
    featuredImage: "/frontend/images/about-us.webp",
    category: "About",
    contentHtml: "<p>SubhChandra Education is dedicated to providing comprehensive career and admission guidance.</p>",
  };

  return <CoursePageTemplate pageData={pageData} />;
}
