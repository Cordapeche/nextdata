import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import pic from '../public/images/plant.jpg'


export default function Home() {



  const [articles, setArticles] = useState([]);
  
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const loadData = async () => {
      fetch('/api/admins')
        .then(async (res) => {
          const data = await res.json();
          setArticles(data);

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

        <div className='container-lg'>
          <h1 className='grand-title'>Recently updated</h1>
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