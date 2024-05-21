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
        <div className='flex flex-col gap-5'>
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

            {loadingData && <h3>Cargando</h3>}
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
        </div>
    );

};
export default Dashboard;