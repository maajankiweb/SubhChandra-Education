import { notFound } from "next/navigation";
import { CoursePageTemplate } from "@/components/layout/CoursePageTemplate";
import pagesDatabase from "@/data/pages_database.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const key = `/blog/${slug}`;
  const data = pagesDatabase[key];

  if (!data) return { title: "Blog Article | SubhChandra Education" };

  return {
    title: `${data.h1 || data.title} | SubhChandra Education`,
    description: data.description || "Educational and career insights from SubhChandra Education.",
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const key = `/blog/${slug}`;
  const pageData = pagesDatabase[key];

  if (!pageData) {
    notFound();
  }

  return <CoursePageTemplate pageData={pageData} />;
}
