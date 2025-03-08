export const metadata = {
  title: {
    template: `%s | Nothing`,
    default: "Nothing",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
