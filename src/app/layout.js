import Providers from "./providers";

export const metadata = {
  title: "2026 ATC Members",
  description: "GitHub 협업 연습을 위한 구성원 페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
