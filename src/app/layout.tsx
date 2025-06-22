
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/index.css';

// Configuration des polices avec next/font pour la performance
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

// Métadonnées SEO par défaut. Sera surchargeable par chaque page.
export const metadata: Metadata = {
  title: 'LeFrigoriste.fr - Dépannage frigorifique et climatisation 24h/24 en Île-de-France',
  description: "Spécialiste en réfrigération commerciale et climatisation. Dépannage frigorifique d'urgence 24h/24, 7j/7 en Île-de-France. Intervention rapide garantie : 45min Yvelines, 1h Paris. Devis gratuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
