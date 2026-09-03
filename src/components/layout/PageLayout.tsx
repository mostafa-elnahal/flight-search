import type { ReactNode } from 'react';
import styles from './PageLayout.module.css';

type PageLayoutProps = {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.layout}>
        <header className={styles.header}>
            <span className={styles.brand}>Flight Search</span>
        </header>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  );
}