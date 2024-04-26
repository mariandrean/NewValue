import React from 'react'
import { createNews, updateNews } from '../services/newsServices';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const NewsForm = ({ method }) => {
  const { handleSubmit, register, setValue } = useForm();
  const navigate = useNavigate();
  let image;
  const newsId = useParams().id;

  if (method === "update") {
    const newsData = useLoaderData(newsId);;
    setValue("news", newsData);
  }

  const handleImage = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "new_value_preset");
    const response = await axios.post("https://api.cloudinary.com/v1_1/dgi5ujtli/image/upload", data);
    image = response.data.secure_url;
  }

  const handleNews = async (formData) => {
    if (image) {
      formData.news.image = image;
    }
    if (method === "create") {
      formData.news.user_id = 1;
      await createNews(formData.news);
    }
    else if (method === "update") {
      const response = await updateNews(newsId, formData.news);
      console.log(response)
    }
    return navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit(formData => handleNews(formData))}>
      <input {...register("news.title")} id="title" type="text" placeholder='Título' />
      <input {...register("news.subtitle")} id="subtitle" type="text" placeholder='Subtítulo' />

      <input {...register("news.image")} id='image' type="file" accept="image/*" onChange={handleImage} />

      <input {...register("news.date")} id="date" type='date' />
      <input {...register("news.content")} id='content' type="text" placeholder='Contenido' />

      <button type="submit">{method === "create" ? "Publicar noticia" : "Guardar"}</button>
      <button onClick={() => navigate('/dashboard')}>Descartar</button>
    </form>
  )
}

export default NewsForm;