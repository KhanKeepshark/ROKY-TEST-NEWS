import { FC } from 'react';
import { SearchInput, Select } from '@/shared/components';
import { useActions } from '@/shared/hooks';
import styles from './component.module.css';

export const SearchCard:FC = () => {
  const { changeSortParams, changeItemsNumber, searchByKeyWord } = useActions();

  return (
    <div className={styles.card}>
      <SearchInput onSearch={(elem) => searchByKeyWord(elem)} />
      <div className={styles.selectsRow}>
        <Select
          defaultValue="Sort by relevance"
          options={[
            { value: 'Sort by relevance', label: 'Sort by relevance' },
            { value: 'Sort by newest', label: 'Sort by newest' },
          ]}
          className={styles.selectSort}
          onChange={() => changeSortParams()}
        />
        <div className={styles.selectPageNumberRow}>
          <p className={styles.text}>Items on Page</p>
          <Select
            defaultValue="20"
            options={[
              { value: '20', label: '20' },
              { value: '40', label: '40' },
            ]}
            className={styles.selectPageNumber}
            onChange={() => changeItemsNumber()}
          />
        </div>
      </div>
    </div>
  );
};
