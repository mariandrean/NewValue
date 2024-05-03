import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteNews } from '../services/newsServices';

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
        if (confirm("¿Eliminar noticia?")) {
            try {
                await deleteNews(newsId);
                setLoadingData(true)
                navigate("/dashboard")
            } catch (error) {
                throw error
            }
        }

    }

    return (
        <>
            <h3 className="text-2xl text-gray-900">Panel de control</h3>
            <button type="button" onClick={() => navigate('/dashboard/create')} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out">
                ➕ Nueva Noticia
            </button>
            <h4 className="text-xl">Noticias publicadas</h4>
            {loadingData && <h3>Cargando</h3>}
            <section className='flex flex-col' >
                {news.map((newsItem, index) => (
                    <article className='flex justify-between items-center'>
                        <Link to={`/news/${newsItem.id}`} key={index} className='flex'>
                            <img src={newsItem.image} alt={newsItem.title} className='h-20 w-20 object-cover' />
                            <div className='flex flex-col justify-around'>
                                <h4>{newsItem.title}</h4>
                                <p className='text-sm'>{newsItem.date}</p>
                            </div>
                        </Link>
                        <div>
                            <button type="button" onClick={() => navigate(`/dashboard/update/${newsItem.id}`)}>✏️</button>
                            <button type="button" onClick={() => handleDelete(newsItem.id)}>❌</button>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
};
export default Dashboard;
