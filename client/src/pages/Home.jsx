import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const [loadingData, setLoadingData] = useState(true);
  const news = useLoaderData();

  useEffect(() => {
    if (news) {
      setLoadingData(false);
    }
  }, [loadingData]);

  return (
    <>
      <h1>ACTUALIDAD</h1>
      {loadingData && <h3>Cargando</h3>}
      {news.map((newsItem, index) => (
        <div key={index}>
          <Card news={newsItem} />
        </div>
      ))}
    </>
  );
};

export default Home;
