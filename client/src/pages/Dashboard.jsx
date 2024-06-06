import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteNews } from '../services/newsServices';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loadingData, setLoadingData] = useState(true);
  const news = useLoaderData();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role')

  const handleRegister = () => {
    navigate('/dashboard/register');
  };

  useEffect(() => {
    if (news) {
      setLoadingData(false)
    }
  }, [loadingData, news]);

  const handleDelete = async (newsId) => {
    Swal.fire({
      title: '¿Eliminar noticia?',
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteNews(newsId, token);
        setLoadingData(true)
        Swal.fire({
          icon: 'success',
          title: 'Noticia eliminada',
          showConfirmButton: true,
          timer: 2000,
        });
        navigate("/dashboard")
      }
    });
  }

  return (
    <div className='flex flex-col gap-5 w-full'>
      <h2 className=" text-gray-900 font-semibold flex justify-center items-center">Panel de control</h2>

      {role === 'admin' && (
        <div className="flex justify-center w-full">
          <button type="button" onClick={handleRegister} className=" text-sm bg-black text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-gray-800 transition duration-300 ease-in-out">
            Registrar moderador
          </button>
        </div>
      )}

      <div className="flex justify-between items-center w-full">
        <h3 className="font-semibold text-lg sm:text-xl">Noticias publicadas</h3>
        <button type="button" onClick={() => navigate('/dashboard/create')} className="text-sm bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-outtext-sm">
          Nueva Noticia
        </button>
      </div>

      {loadingData ?
        <div role="status" className='flex flex-col place-items-center w-full'>
          <svg aria-hidden="true" className="m-3 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span>Cargando noticias...</span>
        </div>
        :
        <div className='flex flex-col gap-3 w-full'>
          {news.map((newsItem, index) => (
            <article key={index} >
              <hr className='mb-3' />
              <div className="flex items-center gap-3 h-[120px]">
                <Link to={`/news/${newsItem.id}`} className='h-full w-1/3 sm:w-[300px]' >
                  <img src={newsItem.image} className='h-full w-full  object-cover rounded-lg' />
                </Link>
                <div className="flex flex-col w-2/3 sm:w-full justify-between h-full p-0.5">
                  <Link to={`/news/${newsItem.id}`} className='flex flex-col justify-around'>
                    <p className="text-gray-500 text-xs sm:text-sm">{newsItem.date}</p>
                    <h2 className="text-sm sm:text-base md:text-lg text-gray-900 mb-2">
                      {newsItem.title.length < 70 ? newsItem.title : (newsItem.title?.slice(0, 70) + "...")}
                    </h2>
                  </Link>
                  <div className='flex gap-2 justify-end'>
                    <button type="button" onClick={() => navigate(`/dashboard/update/${newsItem.id}`)} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out text-xs ">Editar</button>
                    <button type="button" onClick={() => handleDelete(newsItem.id)} className="bg-red-500 text-white border-red-900 rounded-lg font-semibold py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out text-xs ">Eliminar</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      }
    </div>
  );

};
export default Dashboard;