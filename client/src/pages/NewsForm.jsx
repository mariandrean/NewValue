import React, { useEffect, useState } from 'react'
import { createNews, updateNews } from '../services/newsServices';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../helpers/cloudinary';
import TipTap from '../components/TipTap';
import Swal from 'sweetalert2';

const NewsForm = ({ method }) => {
  const token = localStorage.getItem('token');
  const { handleSubmit, register, setValue, formState: { errors }, clearErrors } = useForm();
  const navigate = useNavigate();
  const newsData = useLoaderData();
  const [imagePreview, setImagePreview] = useState(() => newsData ? newsData.image : "");

  useEffect(() => {
    if (newsData) {
      setValue("title", newsData.title);
      setValue("subtitle", newsData.subtitle);
      setValue("date", newsData.date);
      setValue("image", newsData.image)
      setValue("content", newsData.content)
      setValue("category", newsData.category?.split(","));
    }
  }, [newsData]);

  const handleImage = async (e) => {
    Swal.fire({
      title: "Cargando imagen...",
      didOpen: () => {
        Swal.showLoading();
      }
    })
    const response = await uploadImage(e);
    response && Swal.close();
    setImagePreview(response);
    setValue("image", response);
    clearErrors("image");
  }

  const handleEditorContentSave = (html) => {
    setValue("content", html)
    clearErrors("content")
  }

  const onSubmit = async (formData) => {

    if (formData.category) {
      formData.category = formData.category.toString();
    } else {
      formData.category = "";
    }

    if (newsData && method === "update") {
      await updateNews(newsData.id, formData, token);
    } else if (method === "create") {
      await createNews(formData, token);
    }

    Swal.fire({
      icon: 'success',
      title: method === "update" ? "Noticia actualizada" : "Noticia publicada",
      showConfirmButton: true,
      timer: 2000,
    })
      .then(() => navigate("/dashboard"))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[1000px] rounded-xl border-2 border-teal-800 shadow shadow-teal-500 flex flex-col gap-3 p-5 sm:p-10 '>

        <fieldset>
          <input className='input border border-gray-400 appearance-none w-full py-1.5 px-3 focus focus:border-teal-800 focus:outline-none mb-1'{...register("title", { maxLength: { value: 255 }, required: true })} id="title" type="text" placeholder='Título' />
          {errors.title && errors.title.type === "required" && <p className="text-red-500">El título es requerido</p>}
          {errors.title && errors.title.type === "maxLength" && <p className="text-red-500">El título debe tener menos de 255 caracteres</p>}
        </fieldset>

        <fieldset>
          <input className='input border border-gray-400 appearance-none w-full py-1.5 px-3 focus focus:border-teal-800 focus:outline-none'{...register("subtitle", { maxLength: { value: 1024 } })} id="subtitle" type="text" placeholder='Subtítulo (Opcional)' />
          {errors.subtitle && errors.subtitle.type === "maxLength" && <p className="text-red-500">El subtítulo debe tener menos de 1024 caracteres</p>}
        </fieldset>

        <fieldset className='flex flex-col border border-gray-400 appearance-none gap-1 p-3'>
          <legend>Fecha</legend>
          <input className='border border-gray-400 rounded px-3 
        py-2 text-sm focus:border-teal-800 focus:outline-none' {...register("date", { required: true })} id="date" type='date' />
          {errors.date && errors.date.type === "required" && <p className="text-red-500">La fecha es requerida</p>}
        </fieldset>

        <fieldset className="flex flex-col gap-1 text-gray-700 border border-gray-400 appearance-none p-3" >
          <legend>Imagen</legend>
          {imagePreview &&
            <img src={imagePreview} className="max-h-[300px] w-fit mb-2" />
          }
          <input className='image-input border-none w-full text-sm file:mr-4 file:py-2 file:px-3 file:rounded file:border-0 file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-800'
            id='image-input' type="file" accept="image/*" onChange={handleImage} />
          <input id="image" type="text" name="image" className='hidden'
            {...register("image", {
              required: true,
            })}
          />
          {errors.image && errors.image.type === "required" && <p className="text-red-500">La imagen es requerida</p>}
        </fieldset>
        <fieldset>
          <input id="content" type="text" name="content" className='hidden'
            {...register("content", {
              required: true,
            })}
          />
          <TipTap onEditorContentSave={handleEditorContentSave} content={newsData?.content} />
          {errors.content && errors.content.type === "required" && <p className="text-red-500">El contenido es requerido</p>}
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