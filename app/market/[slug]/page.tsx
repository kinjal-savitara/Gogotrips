import { marketPages } from "@/components/market/data";
import MarketTemplate from "@/components/market/MarketTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(marketPages).map((slug) => ({ slug }));
}

export default async function MarketDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = marketPages[slug];
  if (!data) return notFound();
  return <MarketTemplate data={data} />;
}
