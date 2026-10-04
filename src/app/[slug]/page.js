import { notFound } from "next/navigation";
import { UniversityPageTemplate } from "@/components/layout/UniversityPageTemplate";
import { CoursePageTemplate } from "@/components/layout/CoursePageTemplate";
import pagesDatabase from "@/data/pages_database.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const key = `/${slug}`;
  const data = pagesDatabase[key];

  if (!data) return { title: "SubhChandra Education" };

  return {
    title: `${data.h1 || data.title} | SubhChandra Education`,
    description:
      data.description || "Discover degree programs, fees, eligibility, and Bihar Student Credit Card guidance.",
  };
}

export default async function DynamicSlugPage({ params }) {
  const { slug } = await params;
  const key = `/${slug}`;
  const pageData = pagesDatabase[key];

  if (!pageData) {
    notFound();
  }

  if (pageData.category === "university") {
    return <UniversityPageTemplate uniData={pageData} />;
  }

  return <CoursePageTemplate pageData={pageData} />;
}
