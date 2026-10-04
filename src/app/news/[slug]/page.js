import { notFound } from "next/navigation";
import { CoursePageTemplate } from "@/components/layout/CoursePageTemplate";
import pagesDatabase from "@/data/pages_database.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const key = `/news/${slug}`;
  const data = pagesDatabase[key];

  if (!data) return { title: "Education News | SubhChandra Education" };

  return {
    title: `${data.h1 || data.title} | SubhChandra Education`,
    description: data.description || "Latest education news from SubhChandra Education.",
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const key = `/news/${slug}`;
  const pageData = pagesDatabase[key];

  if (!pageData) {
    notFound();
  }

  return <CoursePageTemplate pageData={pageData} />;
}
