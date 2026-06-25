export const metadata = {
  title: "Axum Power",
  description: "Global Digital Payments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
