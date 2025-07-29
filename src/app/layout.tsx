import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sakura  - Sản phẩm chất lượng cao",
  description: "Khám phá các sản phẩm chất lượng cao với nhiều tính năng tuyệt vời để làm cho bạn trông tươi mới. Mua sắm bộ sưu tập đồ trang trí nhà, nội thất và sản phẩm lối sống của chúng tôi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
