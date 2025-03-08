export const metadata = {
  title: {
    template: `%s | Nothing`,
    default: "Nothing",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
