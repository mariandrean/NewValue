import React, { useState, useEffect } from 'react';
import { getAllNews } from "../services/newsServices.js";
import Card from '../components/Card.jsx';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [news, setNews] = useState([]);
  const [reloadingData, setReloadingData] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getAllNews();
      setNews(newsData);
    };
    fetchData();
    setReloadingData(false);
  }, [reloadingData]);

  return (
    <>
      <h1>Home</h1>
      {news.map((newsItem, index) => (
        <div key={index}>
          <Card news={newsItem} setReloadingData={setReloadingData} />
        </div>
      ))}
    </>
  );
};

export default Home;
