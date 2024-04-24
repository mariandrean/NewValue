import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { getAllNews } from "../services/newsServices.js";

const Home = () => {
  const { userAuth } = useUserContext();

  const navigate = useNavigate();

  const handleClickLogin = () => {
    setUser({ name: "Raquel Lores" });
    navigate("/dashboard");
  };

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
          <Card news={newsItem} setReloadingData={setRelodingData} />
        </div>
      ))}
      {!user && <button onClick={handleClickLogin}>Login</button>}
    </>
  );
};

export default Home;
