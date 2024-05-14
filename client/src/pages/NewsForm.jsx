import React, { useEffect, useState } from 'react'
import { createNews, updateNews } from '../services/newsServices';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../helpers/cloudinary';
import TipTap from '../components/TipTap';
import './NewsForm.css'
import Swal from 'sweetalert2';

const NewsForm = ({ method }) => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const newsData = useLoaderData();
  const [newsImage, setNewsImage] = useState(() => newsData ? newsData.image : "");
  const [newsContent, setNewsContent] = useState('');
  const handleEditorContentSave = (html) =>{
    setNewsContent(html);
    console.log('Manejando contenido del editor:', html)
  }

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
    if(newsContent){
      formData.content = newsContent;
    } 
    if (newsData && method === "update") {
      await updateNews(newsData.id, formData);

    } else if (method === "create") {
      await createNews(formData);
    }
    Swal.fire({
      icon: 'success',
      title: method === "update" ? "Noticia actualizada" : "Noticia publicada",
      showConfirmButton: true,
      timer: 2000,
    }).then(() => navigate("/dashboard"))
  }

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit(onSubmit)} className='news-form'>
      <input className='title-input'{...register("title", { maxLength: { value: 255 }, required: true })} id="title" type="text" placeholder='Título' />
      {errors.title && errors.title.type === "required" && <div className="text-red-500">El título es requerido</div>}
      {errors.title && errors.title.type === "maxLength" && <div className="text-red-500">El título debe tener menos de 255 caracteres</div>}

      <input className='subtitle-input'{...register("subtitle", { maxLength: { value: 1024 } })} id="subtitle" type="text" placeholder='Subtítulo' />
      {errors.subtitle && errors.subtitle.type === "maxLength" && <div className="text-red-500">El subtítulo debe tener menos de 1024 caracteres</div>}
      
      <fieldset className='image-fieldset'>
        <input className='image-input'{...register("image")} id='image' type="file" accept="image/*" onChange={handleImage} />
        <img src={newsImage} className="h-[200px]" />
      </fieldset>

      <input className='date-input' {...register("date", { required: true })} id="date" type='date' />
      {errors.date && errors.date.type === "required" && <div className="text-red-500">La fecha es requerida</div>}

      <TipTap onEditorContentSave={handleEditorContentSave}/>
     
      <fieldset className='flex-column ml-2'>
        <legend>Categorías:</legend>
        <label><input {...register("category")} type="checkbox" name="category" id="desarrolloProyectos" value="desarrolloProyectos" /> Desarrollo Proyectos </label>
        <label><input {...register("category")} type="checkbox" name="category" id="oficinaTecnica" value="oficinaTecnica" /> Oficina Técnica </label>
        <label><input {...register("category")} type="checkbox" name="category" id="aws" value="aws" /> AWS </label>
        <label><input {...register("category")} type="checkbox" name="category" id="marketing" value="marketing" /> Marketing </label>
        <label><input {...register("category")} type="checkbox" name="category" id="consultoria" value="consultoria" /> Consultoría </label>
        <label><input {...register("category")} type="checkbox" name="category" id="voluntariado" value="voluntariado" /> Voluntariado </label>
      </fieldset>

      <div className='buttons-container'>
      <button type="submit" className="w-[150px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">{method === "create" ? "Publicar" : "Guardar"}</button>
      <button onClick={() => navigate('/dashboard') } className="w-[150px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">Descartar</button>
      </div>

    </form>
    </div>
  )
}

export default NewsForm;