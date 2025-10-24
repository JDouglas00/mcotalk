import "./globals.css"
export const metadata = {
  title: "mcotalk",
  description: "mcotalk on Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
