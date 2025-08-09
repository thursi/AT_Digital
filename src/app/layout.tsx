import ATDigitalHeader from "../components/ATDigitalHeader";
import ModernFooter from "../components/ModernFooter";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ATDigitalHeader />
        <div className="min-h-screen">{children}</div>
        <ModernFooter />
      </body>
    </html>
  );
}
