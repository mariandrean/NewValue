import React, { useEffect, useState } from 'react'
import { createNews, updateNews } from '../services/newsServices';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../helpers/cloudinary';
import TipTap from '../components/TipTap';
import Swal from 'sweetalert2';

const NewsForm = ({ method }) => {
  const { handleSubmit, register, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const newsData = useLoaderData();
  const [newsImage, setNewsImage] = useState(() => newsData ? newsData.image : "");
  const [newsContent, setNewsContent] = useState();
  const [imageError, setImageError] = useState(false);
  const [contentError, setContentError] = useState(false);

  useEffect(() => {
    if (newsData) {
      setValue("title", newsData.title);
      setValue("subtitle", newsData.subtitle);
      setValue("image", newsData.image)
      setValue("date", newsData.date);
      setValue("category", newsData.category?.split(","));
      setNewsContent(newsData.content);
    }
  }, [newsData, setImageError]);

  const handleImage = async (e) => {
    const response = await uploadImage(e);
    setNewsImage(response);
    setImageError(false);
  }

  const handleEditorContentSave = (html) => {
    setNewsContent(html);
  }

  const onSubmit = async (formData) => {
    console.log(formData)
    if (newsImage) {
      formData.image = newsImage;
      setImageError(false);
    } else {
      return setImageError(true);
    }
    if (newsContent) {
      formData.content = newsContent;
      setContentError(false); 
    } else {
      return setContentError(true);
    }

    if (formData.category) {
      formData.category = formData.category.toString();
    } else {
      formData.category = "";
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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[1000px] rounded-xl border-2 border-teal-800 shadow shadow-teal-500 flex flex-col gap-3 p-5 sm:p-10 '>

        <fieldset>
          <input className='input border border-gray-400 appearance-none w-full py-1.5 px-3 focus focus:border-teal-800 focus:outline-none mb-1'{...register("title", { maxLength: { value: 255 }, required: true })} id="title" type="text" placeholder='Título' />
          {errors.title && errors.title.type === "required" && <div className="text-red-500">El título es requerido</div>}
          {errors.title && errors.title.type === "maxLength" && <div className="text-red-500">El título debe tener menos de 255 caracteres</div>}
        </fieldset>

        <input className='input border border-gray-400 appearance-none w-full py-1.5 px-3 focus focus:border-teal-800 focus:outline-none'{...register("subtitle", { maxLength: { value: 1024 } })} id="subtitle" type="text" placeholder='Subtítulo (Opcional)' />
        {errors.subtitle && errors.subtitle.type === "maxLength" && <div className="text-red-500">El subtítulo debe tener menos de 1024 caracteres</div>}

        <fieldset className='border border-gray-400 appearance-none  p-3'>
          <legend>Fecha</legend>
          <input className='border border-gray-400 rounded px-3 
        py-2 text-sm focus:border-teal-800 focus:outline-none' {...register("date", { required: true })} id="date" type='date' />
          {errors.date && errors.date.type === "required" && <div className="text-red-500">La fecha es requerida</div>}
        </fieldset>

        <fieldset className="flex flex-col gap-3 text-gray-700 border border-gray-400 appearance-none p-3" >
          <legend>Imagen</legend>
          {newsImage &&
            <img src={newsImage} className="max-h-[300px] w-fit" />
          }
          <input className='image-input border-none w-full text-sm file:mr-4 file:py-2 file:px-3 file:rounded file:border-0 file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-800
        '{...register("image")} id='image' type="file" accept="image/*" onChange={handleImage} />
          {imageError && <div className="text-red-500">La imagen es requerida</div>}
        </fieldset>
        <fieldset>
          <TipTap onEditorContentSave={handleEditorContentSave} content={newsData?.content} />
          {contentError && <div className="text-red-500">El contenido es requerido</div>}
        </fieldset>


        <fieldset className='border border-gray-400 appearance-none p-3'>
          <legend>Categorías</legend>
          <div className='flex flex-col px-3 gap-1'>
            <label><input {...register("category")} type="checkbox" name="category" id="desarrolloProyectos" value="Desarrollo Proyectos" /> Desarrollo Proyectos </label>
            <label><input {...register("category")} type="checkbox" name="category" id="oficinaTecnica" value="Oficina Tecnica" /> Oficina Técnica </label>
            <label><input {...register("category")} type="checkbox" name="category" id="aws" value="AWS" /> AWS </label>
            <label><input {...register("category")} type="checkbox" name="category" id="marketing" value="Marketing" /> Marketing </label>
            <label><input {...register("category")} type="checkbox" name="category" id="consultoria" value="Consultoria ESG" /> Consultoría ESG</label>
            <label><input {...register("category")} type="checkbox" name="category" id="voluntariado" value="Voluntariado" /> Voluntariado </label>
          </div>

        </fieldset>

        <div className='flex justify-center gap-5 mt-3 sm:mt-5'>
          <button type="submit" className="w-[120px] self-center bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">{method === "create" ? "Publicar" : "Guardar"}</button>
          <button type='button' onClick={() => navigate('/dashboard')} className="w-[120px] self-center bg-gray-500 text-white border-gray-900 rounded-lg font-semibold py-2 px-4 hover:bg-gray-800 transition duration-300 ease-in-out">Descartar</button>
        </div>

      </form>
    </>
  )
}

export default NewsForm;