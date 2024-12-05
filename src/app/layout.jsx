import "./globals.css";
import { font } from "@/lib/fonts";
import { Container } from "@/components/container";
import { PreviewModal } from "@/components/modals/preview-modal";

export const metadata = {
  title: "Tayef Mahmud",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} font-medium`}>
        <main>
          <Container>{children}</Container>
        </main>
        <PreviewModal />
      </body>
    </html>
  );
}
