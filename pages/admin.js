import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import pic from '../public/images/plant.jpg'
import Link from 'next/link';


export default function Home() {



    const [articles, setArticles] = useState([]);
    const router = useRouter();

    // Supprimer un commmentaire et mettre à jour dans le client
    const handleDelete = (id) => {
        fetch("/api/admins/"+id+"/delete")
            .then(async (res) => {
                const data = await res.json();
                console.log(data);
                setArticles(data);
            });
    }



    useEffect(() => {
        if (!router.isReady) return;
        const loadData = async () => {
            fetch('/api/admins')
                .then(async (res) => {
                    const data = await res.json();
                    setArticles(data);
                    console.log('data:', data);

                })
        };
        loadData();
    }, [router.isReady]);


    return (
        <>
            <Head>
                <title>The plant paradise</title>
                <meta name="keywords" content="nextjs" />
            </Head>
            <div>
                <div className='container-lg p-y'>
                <button className='btn-custom add-btn'>
                        <Link href='/blog/create'>Add new plant</Link>
                    </button>
                </div>
                <div className='container-lg'>
                    
                    <div className='row'>

                        {
                            articles.map(article => {
                                return (


                                    <div className='col col-12 col-lg-4 col-md-6'>
                                        <div key={article._id}>

                                            <div className='mycard'>
                                                <Image src={pic} className='card-img-top' alt='some images' />
                                                <div className='card-body'>
                                                    <div className='card-price-title'>
                                                        <h5 className='card-title'>{article.title}</h5>
                                                        <h5 className='card-title'>{article.price}<span>€</span></h5>
                                                    </div>
                                                    <p className='card-text'>{article.description}</p>

                                                    <div className='row-center'>
                                                        <div className='col red'>
                                                            <button className='btn-custom'><a href='#' onClick={() => handleDelete(article._id)}>Delete</a></button>
                                                        </div>
                                                        <div className='col'>
                                                            <button className='btn-custom'>
                                                                <Link href={'/blog/edit/'+article._id } >Edit</Link>
                                                            </button>
                                                        </div>


                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                )
                            })
                        }


                    </div>

                </div>
            </div>
        </>
    )
}