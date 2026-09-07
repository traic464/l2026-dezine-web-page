import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import ServicePageClient from "./ServicePageClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.metaDesc,
    openGraph: {
      title: service.seoTitle,
      description: service.metaDesc,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageClient service={service} />;
}
