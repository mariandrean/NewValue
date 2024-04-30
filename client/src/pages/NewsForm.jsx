import React, { useState } from 'react'
import { createNews, updateNews } from '../services/newsServices';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../helpers/cloudinary';

const NewsForm = ({ method }) => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const newsId = useParams().id;
  const newsData = useLoaderData(newsId);
  const [newsImage, setNewsImage] = useState(() => newsData ? newsData.image : "");

  if (newsData) {
    setValue("title", newsData.title);
    setValue("subtitle", newsData.subtitle);
    setValue("date", newsData.date);
    setValue("content", newsData.content);
  }
  const handleImage = async (e) => {
    const response = await uploadImage(e);
    setNewsImage(response);
  }

  const onSubmit = async (formData) => {
    formData.image = newsImage;

    if (newsData) {
      const response = await updateNews(newsId, formData);
      console.log(response)
    }
    else {
      formData.news.user_id = 1;
      await createNews(formData.news);
    }

    return navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { maxLength: { value: 255 } , required: true })} id="title" type="text" placeholder='Título' />
      {errors.title && errors.title.type === "required" && <div className="text-red-500">El título es requerido</div>}
      {errors.title && errors.title.type === "maxLength" && <div className="text-red-500">El título debe tener menos de 255 caracteres</div>}

      <input {...register("subtitle", { maxLength: { value: 1024 } })} id="subtitle" type="text" placeholder='Subtítulo' />
      {errors.subtitle && errors.subtitle.type === "maxLength" && <div className="text-red-500">El subtítulo debe tener menos de 1024 caracteres</div>}

      <input {...register("image")} id='image' type="file" accept="image/*" onChange={handleImage} />
      <img src={newsImage} className="w-[250px]" />

      <input {...register("date", { required: true })} id="date" type='date' />
      {errors.date && errors.date.type === "required" && <div className="text-red-500">La fecha es requerida</div>}

      <input {...register("content", { required: true })} id='content' type="textarea" placeholder='Contenido' />
      {errors.content && errors.content.type === "required" && <div className="text-red-500">El contenido es requerido</div>}

      <button type="submit">{method === "create" ? "Publicar noticia" : "Guardar"}</button>
      <button onClick={() => navigate('/dashboard')}>Descartar</button>
    </form>
  )
}

export default NewsForm;