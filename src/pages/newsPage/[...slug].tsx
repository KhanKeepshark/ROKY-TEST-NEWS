import { Button } from '@/shared/components';
import { DetailPageApi } from '@/shared/api';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import styles from './newsPage.module.css';

interface Params extends ParsedUrlQuery {
  slug: string[];
}

interface NewsPageDataProps {
  webPublicationDate: string;
  fields: { thumbnail: string, bodyText: string };
  webTitle: string;
  webUrl: string;
}

interface NewsPageProps {
  newsPageData: NewsPageDataProps;
}

export default function NewsPage({ newsPageData }: NewsPageProps) {
  const newsDate = useMemo(() => dayjs(newsPageData.webPublicationDate).format('DD MMMM YYYY, hh:mm:ss A'), [newsPageData]);
  const { push } = useRouter();
  return (
    <div className={styles.page}>
      <img src={newsPageData.fields.thumbnail} alt="notFound" />
      <div className={styles.info}>
        <div className={styles.date}>{newsDate}</div>
        <a href={newsPageData.webUrl}>read on Guardian</a>
      </div>
      <div className={styles.title}>{newsPageData.webTitle}</div>

      <div className={styles.description}>{newsPageData.fields.bodyText}</div>
      <Button className={styles.btn} onClick={() => { push('/'); }}>Return to main page</Button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  newsPageData: NewsPageDataProps
}> = async ({
  params,
}) => {
  const { slug } = params as Params;
  const pageid = slug.join('/');
  const newsPageData = await DetailPageApi.getPage(pageid);
  return {
    props: { newsPageData },
  };
};
