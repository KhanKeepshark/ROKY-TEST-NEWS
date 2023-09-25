import { NewsCard } from '@/entities/newsCard';
import {
  FC, useEffect, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '@/shared/hooks';
import { Spin } from 'antd';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import styles from './component.module.css';

export const NewsSection:FC = () => {
  const {
    searchData, itemsOnPage, sortBy, searchKeyword, currentPage,
  } = useSelector((state: any) => state);
  const { fetchData, scrollData, changeCurrentPage } = useActions();

  const newsData = useMemo(() => searchData.data?.results, [searchData]);

  useEffect(() => {
    fetchData({ itemsOnPage: Number(itemsOnPage), sortBy, searchKeyword });
    changeCurrentPage(2);
  }, [searchKeyword, itemsOnPage, sortBy]);

  useBottomScrollListener(() => {
    scrollData({
      itemsOnPage: Number(itemsOnPage), sortBy, searchKeyword, currentPage,
    });
    changeCurrentPage(currentPage + 1);
  });

  if (searchData.isLoading) {
    return (
      <Spin className={styles.spin} size="large" />
    );
  }

  interface NewsDataProps {
    webPublicationDate: string;
    webTitle: string;
    fields: { thumbnail: string };
    id: string;
  }

  return (
    <div className={styles.section}>
      {newsData?.length === 0
        ? <div>empty</div>
        : newsData?.map(({
          webPublicationDate,
          webTitle,
          fields,
          id,
        }: NewsDataProps) => (
          <NewsCard
            key={id}
            imgUrl={fields?.thumbnail}
            title={webTitle}
            date={webPublicationDate}
            id={id}
          />
        ))}
    </div>
  );
};
