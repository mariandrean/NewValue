import React, { useState } from 'react'
import { createNews, updateNews } from '../services/newsServices';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../helpers/cloudinary';

const NewsForm = ({ method }) => {
  const { handleSubmit, register, setValue } = useForm();
  const navigate = useNavigate();
  const newsId = useParams().id;
  const newsData = useLoaderData(newsId);
  const [newsImage, setNewsImage] = useState(() => newsData ? newsData.image : "");
  
  setValue("news", newsData);

  const handleImage = async (e) => {
    const response = await uploadImage(e);
    setNewsImage(response);
  }

  const handleNews = async (formData) => {
    formData.news.image = newsImage;
    
    if (newsData) {
      const response = await updateNews(newsId, formData.news);
      console.log(response)
    }
    else {
      formData.news.user_id = 1;
      await createNews(formData.news);
    }
    
    return navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit(handleNews)}>
      <input {...register("news.title")} id="title" type="text" placeholder='Título' />
      <input {...register("news.subtitle")} id="subtitle" type="text" placeholder='Subtítulo' />

      <input {...register("news.image")} id='image' type="file" accept="image/*" onChange={handleImage} />
      <img src={newsImage} className="w-[250px]" />

      <input {...register("news.date")} id="date" type='date' />
      <input {...register("news.content")} id='content' type="text" placeholder='Contenido' />

      <button type="submit">{method === "create" ? "Publicar noticia" : "Guardar"}</button>
      <button onClick={() => navigate('/dashboard')}>Descartar</button>
    </form>
  )
}

export default NewsForm;