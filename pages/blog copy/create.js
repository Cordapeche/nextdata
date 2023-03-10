import { useState } from 'react';
import Image from 'next/image';
// import pic from '../../../public/images/plant.jpg'



const Create = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Cree un nouveau article
    const handSubmit = (e) => {
        e.preventDefault();
        const article = { title, price, description };
        

        console.log('data', article);

        fetch('/api/admin/new', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        }).then(() => {
        })
    }

    return (
        <>
            <div className='formular'>
                <div className='form'>
                    <h1> Ajouter un commentair</h1>
                    <form onSubmit={handSubmit}>

                        {/* <Image src={pic} className='card-img-top' alt='some images' /> */}
                        <label>Nom</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Commentaire</label>
                        <input
                            type="text"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <label>Commentaire</label>
                        <input
                            type="text"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button
                            type="submit"
                        >
                            Ajouter
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create;