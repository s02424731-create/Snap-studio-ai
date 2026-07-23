import "./globals.css";

export const metadata = {
  title: "AI Snap Studio - Free AI Product Ads",
  description: "Create stunning AI product photos for your e-commerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0d17] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
