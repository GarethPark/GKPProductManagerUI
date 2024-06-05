// components/Layout.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <nav style={{ width: '200px', padding: '20px', background: '#f0f0f0' }}>
        <ul>
          <li className={router.pathname === '/page1' ? 'active' : ''}>
            <Link href="/page1">Page 1</Link>
          </li>
          <li className={router.pathname === '/page2' ? 'active' : ''}>
            <Link href="/page2">Page 2</Link>
          </li>
          <li className={router.pathname === '/page3' ? 'active' : ''}>
            <Link href="/page3">Page 3</Link>
          </li>
        </ul>
      </nav>
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
      <style jsx>{`
        .active {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Layout;
