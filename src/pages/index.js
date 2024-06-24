import Head from 'next/head';
import DataDisplay from '../components/DataDisplay';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Data Display</title>
      </Head>
      <DataDisplay />
    </div>
  );
};

export default Home;