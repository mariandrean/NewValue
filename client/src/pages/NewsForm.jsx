import React, { useEffect, useState } from 'react'
import { createNews, updateNews } from '../services/newsServices';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../helpers/cloudinary';

const NewsForm = ({ method }) => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const newsData = useLoaderData();
  const [newsImage, setNewsImage] = useState(() => newsData ? newsData.image : "");

  useEffect(() => {
    if (newsData) {
      setValue("title", newsData.title);
      setValue("subtitle", newsData.subtitle);
      setValue("date", newsData.date);
      setValue("content", newsData.content);
      setValue("category", newsData.category.split(","))
    }
  }, []);

  const handleImage = async (e) => {
    const response = await uploadImage(e);
    setNewsImage(response);
  }

  const onSubmit = async (formData) => {
    formData.image = newsImage;
    formData.category = formData.category.toString();

    if (newsData && method === "update") {
      await updateNews(newsData.id, formData);
    } else if (method === "create") {
      formData.user_id = 1; // Eliminar línea cuando funcione el log in
      await createNews(formData);
    }
    return navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { maxLength: { value: 255 }, required: true })} id="title" type="text" placeholder='Título' />
      {errors.title && errors.title.type === "required" && <div className="text-red-500">El título es requerido</div>}
      {errors.title && errors.title.type === "maxLength" && <div className="text-red-500">El título debe tener menos de 255 caracteres</div>}

      <input {...register("subtitle", { maxLength: { value: 1024 } })} id="subtitle" type="text" placeholder='Subtítulo' />
      {errors.subtitle && errors.subtitle.type === "maxLength" && <div className="text-red-500">El subtítulo debe tener menos de 1024 caracteres</div>}

      <fieldset>
        <input {...register("image")} id='image' type="file" accept="image/*" onChange={handleImage} />
        <img src={newsImage} className="h-[200px]" />
      </fieldset>

      <input {...register("date", { required: true })} id="date" type='date' />
      {errors.date && errors.date.type === "required" && <div className="text-red-500">La fecha es requerida</div>}

      <textarea {...register("content", { required: true })} id='content' placeholder='Contenido' />
      {errors.content && errors.content.type === "required" && <div className="text-red-500">El contenido es requerido</div>}

      <fieldset className='flex-column'>
        <legend>Categorías:</legend>
        <label><input {...register("category")} type="checkbox" name="category" id="desarrolloProyectos" value="desarrolloProyectos" /> Desarrollo Proyectos </label>
        <label><input {...register("category")} type="checkbox" name="category" id="oficinaTecnica" value="oficinaTecnica" /> Oficina Técnica </label>
        <label><input {...register("category")} type="checkbox" name="category" id="aws" value="aws" /> AWS </label>
        <label><input {...register("category")} type="checkbox" name="category" id="marketing" value="marketing" /> Marketing </label>
        <label><input {...register("category")} type="checkbox" name="category" id="consultoria" value="consultoria" /> Consultoría </label>
        <label><input {...register("category")} type="checkbox" name="category" id="voluntariado" value="voluntariado" /> Voluntariado </label>
      </fieldset>

      <button type='submit'>{method === "create" ? "Publicar noticia" : "Guardar"}</button>
      <button type='button' onClick={() => navigate('/dashboard')}>Descartar</button>
    </form>
  )
}

export default NewsForm;