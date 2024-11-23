import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '김다운 포트폴리오',
  description: '김다운의 포트폴리오',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
