import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const [loadingData, setLoadingData] = useState(true);
  const news = useLoaderData();
  const url = new URL(window.location.href);
  const urlParams = new URLSearchParams(url.search);
  const code = urlParams.get('code');
  console.log(code)

  useEffect(() => {
    if (news) {
      setLoadingData(false)
    }
  }, [loadingData]);

  return (
    <>
      <h1>ACTUALIDAD</h1>
      {loadingData && <h3>Cargando</h3>}
      <section className='grid grid-cols-4 gap-5 place-content-center place-items-center' >
        {news.map((newsItem, index) => (
          <Link to={`/news/${newsItem.id}`} key={index} className={index == 0 && 'col-span-2 row-span-2' } >
            <Card news={newsItem} />
          </Link>
        ))}
      </section>

    </>
  );
};

export default Home;
