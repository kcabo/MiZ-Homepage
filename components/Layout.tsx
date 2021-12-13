import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='pt-24 lg:pt-40 '>{children}</main>
      <Footer />
    </>
  );
}
