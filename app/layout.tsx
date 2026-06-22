import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LearnHub - Learn something new",
  description: "LearnHub is modern platform for learn Next.js and other modern technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="layout">
        <header className="site-header">
          <div className="container site-header-inner">

            <Link href="/" className="site-logo">
              <span className="site-logo-mark">L</span>
              <span>LearnHub</span>
            </Link>

            <form action="/search" method="get" className="header-search">
            
            <input 
            type="search"
            name="q"
            id="header-search-q"
            placeholder="Search courses..."
            className="input header-search-input"
            autoComplete="off"
            ></input>
            
            <button type="submit" className="btn btn-primary btn-sm">Search</button>
            </form>

            <nav className="site-nav">
            <a href="/" className="site-nav-link">Home</a>
            <a href="/courses" className="site-nav-link">Courses</a>
            <a href="/instructors" className="site-nav-link">Instructors</a>
          </nav>
          </div>
        </header>
        
        <main className="layout-main">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p className="site-footer-copy">Copyright &copy 2026</p>
          </div>
        </footer>
        </body>
    </html>
  );
}
