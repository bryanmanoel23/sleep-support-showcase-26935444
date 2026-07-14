import type { ReactNode } from "react";

export function LegalLayout({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-secondary text-secondary-foreground">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-xs sm:text-sm">
          This page contains affiliate links. If you buy through them, we may earn a commission at no extra cost to you.
        </p>
      </div>

      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            RestWell<span className="text-primary">Reviews</span>
          </a>
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to review</a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {updated && (
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
        )}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/90 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2:first-child]:mt-0 [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground [&_a]:text-primary [&_a:hover]:underline">
            {children}
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground">Terms</a>
            <a href="/disclosure" className="text-muted-foreground hover:text-foreground">Affiliate Disclosure</a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a>
          </nav>
          <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} RestWellReviews. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}