import "./globals.css";
import { font } from "@/lib/fonts";
import { Container } from "@/components/container";

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
      </body>
    </html>
  );
}
