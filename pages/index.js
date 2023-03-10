import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';





export default function Home() {
  const [comments, setComts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const loadData = async () => {
      fetch('/api/comments')
        .then(async (res) => {
          const data = await res.json();
          setComts(data);

        })
    };
    loadData();
  }, [router.isReady]);


  return (
    <>
      <Head>
        <title>Nextjs | Home</title>
        <meta name="keywords" content="nextjs" />
      </Head>
      <div>
        <h1 >Last Updated</h1>
        <div className='container-lg'>

          <div className='row'>

            {
              comments.map(comment => {
                return (
                  <div className='col-4'>
                    <div key={comment._id}>
                      {comment._id} - {comment.text} - {comment.name}
                      <a href='#' onClick={() => handleDelete(comment._id)}>Delete</a></div>
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