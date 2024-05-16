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

                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h4 className="text-xl">Noticias publicadas</h4>
                                {loadingData && <h3>Cargando</h3>}
                            </div>
                            <button type="button" onClick={() => navigate('/dashboard/create')} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out ">
                                ➕ Nueva Noticia
                            </button>
                        </div>

                        {news.map((newsItem, index) => (
                            <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <img src={newsItem.image} className='h-full w-30 object-cover rounded-lg mb-4 md:mb-0 mr-4' />
                                </div>
                                <div className="md:flex-grow h-50">
                                    <Link to={`/news/${newsItem.id}`} className='flex'>
                                        <div className='flex flex-col justify-around'>
                                            <span className="mt-1 text-gray-500 text-sm">{newsItem.date}</span>
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{newsItem.title}</h2>
                                            <p className="leading-relaxed text-lg mb-4">{newsItem.content.substring(0, 100)}...</p>
                                        </div>
                                    </Link>
                                    <div className='flex gap-2'>
                                        <button type="button" onClick={() => navigate(`/dashboard/update/${newsItem.id}`)} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">Editar</button>
                                        <button type="button" onClick={() => handleDelete(newsItem.id)} className="bg-red-500 text-white border-red-900 rounded-lg font-semibold py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};
export default Dashboard;






// codigo original:
// <h3 className="text-2xl text-gray-900">Panel de control</h3>
// <button type="button" onClick={() => navigate('/dashboard/create')} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">
//     ➕ Nueva Noticia
// </button>
// <h4 className="text-xl">Noticias publicadas</h4>
// {loadingData && <h3>Cargando</h3>}
// <section className='flex flex-col' >
//     {news.map((newsItem, index) => (
//         <article className='flex justify-between items-center' key={index}>
//             <Link to={`/news/${newsItem.id}`} className='flex'>
//                 <img src={newsItem.image} alt={newsItem.title} className='h-20 w-20 object-cover' />
//                 <div className='flex flex-col justify-around'>
//                     <h4>{newsItem.title}</h4>
//                     <p className='text-sm'>{newsItem.date}</p>
//                 </div>
//             </Link>
//             <div>
//                 <button type="button" onClick={() => navigate(`/dashboard/update/${newsItem.id}`)}>✏️</button>
//                 <button type="button" onClick={() => handleDelete(newsItem.id)}>❌</button>
//             </div>
//         </article>
//     ))}
// </section>