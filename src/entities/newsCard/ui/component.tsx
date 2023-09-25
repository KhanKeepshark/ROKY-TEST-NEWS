import { FC, useMemo } from 'react';
import { Button } from '@/shared/components';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import styles from './component.module.css';
import { NewsCardProps } from '../models/NewsCardProps';

export const NewsCard:FC<NewsCardProps> = ({
  imgUrl, title, date, id,
}) => {
  const newsDate = useMemo(() => dayjs(date).format('DD MMMM YYYY, hh:mm:ss A'), [date]);
  const { push } = useRouter();
  return (
    <div className={styles.card}>
      <div>
        <img src={imgUrl} alt="not Found" />
        <div className={styles.text}>
          <p className={styles.date}>{newsDate}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <div className={styles.btn}>
        <Button onClick={() => push(`/newsPage/${id}`)}>Details</Button>
      </div>
    </div>
  );
};
