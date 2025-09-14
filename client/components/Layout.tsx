import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Layout() {
  return (
    <div className="min-h-dvh relative text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="group inline-flex items-center gap-2">
            <Logo />
            <span className="text-sm font-semibold tracking-wide text-foreground/90 group-hover:text-foreground">
              Gnaneshwari Sarla
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/Gnaneshwari3001"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a href="/api/resume">
              <Button size="sm" className="bg-primary/90 hover:bg-primary">
                Download Resume
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <Outlet />
      </main>

      <footer className="mt-24 border-t bg-background/70">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2025 Gnaneshwari Sarla | Built with ❤️</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/gnaneshwarisarala3001/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gnaneshwarisarla001@gmail.com"
              className="hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
