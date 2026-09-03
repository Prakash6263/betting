import StyleManager from './styles-manager';
import AuthGuard from '../components/AuthGuard';

export const metadata = {
  title: 'Football Intelligence'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-bs-theme="dark">
      <body>
        <StyleManager />
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}