import { notFound } from "next/navigation";
import { CoursePageTemplate } from "@/components/layout/CoursePageTemplate";
import pagesDatabase from "@/data/pages_database.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const key = `/ug/${slug}`;
  const data = pagesDatabase[key];

  if (!data) return { title: "UG Course Details | SubhChandra Education" };

  return {
    title: `${data.h1 || data.title} | SubhChandra Education`,
    description: data.description || "Comprehensive admission, course, and career guide.",
  };
}

export default async function UgCoursePage({ params }) {
  const { slug } = await params;
  const key = `/ug/${slug}`;
  const pageData = pagesDatabase[key];

  if (!pageData) {
    notFound();
  }

  return <CoursePageTemplate pageData={pageData} />;
}
