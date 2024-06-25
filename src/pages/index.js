import Head from 'next/head';
import DataDisplay from '../components/DataDisplay';
import Header from '@/components/Header';
const Home = () => {
  return (
    <div>
      <Head>
        <title>Data Display</title>
      </Head>
      <Header />
      <DataDisplay />
    </div>
  );
};

export default Home;