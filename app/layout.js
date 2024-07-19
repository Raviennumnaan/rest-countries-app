import Header from "@/app/_components/Header";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Rest Countries Api",
    default: "Welcome | Rest Countries Api",
  },
  description: "A Rest Countries Api app build by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-[100vh] flex-col overflow-hidden dark:bg-dark-blue">
        <Header />
        <main className="w-full flex-1 overflow-y-scroll">{children}</main>
      </body>
    </html>
  );
}
