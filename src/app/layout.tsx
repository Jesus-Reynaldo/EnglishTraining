import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'English Training — Structure & Written Expression',
  description: 'Interactive English Training practice for Structure and Written Expression sections.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-[#1a3a5c] shadow-md">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
              T
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-tight">English Training</h1>
              <p className="text-blue-200 text-xs">Structure &amp; Written Expression</p>
            </div>
          </div>
        </header>
        <div className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
