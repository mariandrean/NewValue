import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [loadingData, setLoadingData] = useState(true);
  const news = useLoaderData();

  useEffect(() => {
    if (news) {
      setLoadingData(false)
    }
  }, [loadingData]);

  return (
    <>
      <Helmet>
        <meta property="description" content="New Value - Actualidad" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="New Value - Actualidad" />
        <meta property="og:description" content="New Value - Actualidad" />
        <meta property="og:title" content="New Value - Actualidad" />
        <meta property="og:image" content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f3cf53e-4c4c-4d97-805a-f94dd20ef72f/ac29ac0a-98b0-455e-8c81-5dc8dac6e68c?org_if_sml=1" />
      </Helmet>
      <h1 className="font-semibold text-lg mb-5">ACTUALIDAD</h1>
      {loadingData && <h3>Cargando</h3>}
      <section className='grid grid-cols-2 gap-5 lg:gap-8 sm:grid-cols-3 md:grid-cols-4 place-content-center' >
        {news.map((newsItem, index) => (
          <article key={index} className={(index == 0) ? 'col-span-2 row-span-2' : ''}>
            <Card news={newsItem} index={index} />
          </article >
        ))}
      </section>
    </>
  );
};

export default Home;
