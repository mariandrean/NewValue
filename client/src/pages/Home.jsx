import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { useLoaderData } from 'react-router-dom';

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
      <h1 className="font-semibold text-lg mb-5">ACTUALIDAD</h1>
      {loadingData && <h3>Cargando</h3>}
      <section className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 place-content-center' >
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
