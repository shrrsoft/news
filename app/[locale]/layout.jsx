import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/header/Header";
import Footer from "@/Components/footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";

const inter = Inter({ subsets: ["latin"] });
const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: "Iranian Agency",
  description: "Persian News Agency",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${inter.className} ${vazir.className} antialiased`}>
          <Header locale={locale} />
          <div className="md:max-w-7xl mx-auto font-[Vazirmatn]">
            {children}
          </div>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
