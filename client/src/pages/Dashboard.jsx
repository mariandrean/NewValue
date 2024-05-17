import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteNews } from '../services/newsServices';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const navigate = useNavigate();
    const [loadingData, setLoadingData] = useState(true);
    const news = useLoaderData();

    useEffect(() => {
        if (news) {
            setLoadingData(false)
        }
    }, [loadingData]);

    const handleDelete = async (newsId) => {
        Swal.fire({
            title: '¿Eliminar noticia?',
            showDenyButton: true,
            confirmButtonText: "Eliminar",
            denyButtonText: `Cancelar`
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteNews(newsId);
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
        <>
            <h3 className="text-2xl text-gray-900 font-bold flex justify-center items-center">Panel de control</h3>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">

                        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
                            <div>
                                <h4 className="text-xl font-bold">Noticias publicadas</h4>
                                {loadingData && <h3>Cargando</h3>}
                            </div>
                            <button type="button" onClick={() => navigate('/dashboard/create')} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out mt-4 lg:mt-0">
                                Nueva Noticia
                            </button>
                        </div>
                        <div className='flex flex-col gap-3'>
                        {news.map((newsItem, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <img src={newsItem.image} className='h-[130px] object-cover rounded-lg mr-4' />
                                </div>
                                <div className="md:flex-grow">
                                    <Link to={`/news/${newsItem.id}`} className='flex'>
                                        <div className='flex flex-col justify-around'>
                                            <span className="mt-1 text-gray-500 text-xs sm:text-sm">{newsItem.date}</span>
                                            <h2 className="text-sm sm:text-2xl font-medium text-gray-900 title-font mb-2">{newsItem.title}</h2>
                                        </div>
                                    </Link>
                                    <div className='flex gap-2 mt-4 md:mt-0'>
                                        <button type="button" onClick={() => navigate(`/dashboard/update/${newsItem.id}`)} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">Editar</button>
                                        <button type="button" onClick={() => handleDelete(newsItem.id)} className="bg-red-500 text-white border-red-900 rounded-lg font-semibold py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Dashboard;