import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import pic from '../../public/images/plant.jpg';



const Create = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    // Cree un nouveau article
    const handSubmit = (e) => {
        e.preventDefault();
        const article = { title, price, description };


        console.log('data', article);

        fetch('/api/admins/new', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        }).then(() => {
        })
        router.push('/admin')
    }

    return (
        <>
            <div className='container-lg'>
                <div className='col'>
                    <div className='formular'>
                        <div className='form'>

                            <form onSubmit={handSubmit}>
                                <h1>Ajour un article</h1><br/>

                                <Image src={pic} className='card-img-top' alt='some images' /><br/>
                                <label><h5>Nom</h5></label>
                                <input
                                    className='p-y'
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label><h5>Price</h5></label>
                                <input
                                    className='p-y'
                                    type="text"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label><h5>Description</h5></label>
                                <input
                                    className='p-y'
                                    type="text"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <button className='btn-custom'
                                    type="submit"
                                >
                                    Ajouter un article
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;