import { SearchCard } from '@/entities/searchCard';
import styles from '@/styles/Main.module.css';
import { NewsSection } from '@/widgets/NewsSection';

export default function Home() {
  return (
    <div className={styles.main}>
      <SearchCard />
      <NewsSection />
    </div>
  );
}
