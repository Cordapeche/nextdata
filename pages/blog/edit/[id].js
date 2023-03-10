import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import pic from '../../../public/images/plant.jpg';

const Create = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();
    const handSubmit = (e) => {
        e.preventDefault();
        var id = router.query.id;
        const article = { title, price, description, id };

        fetch('/api/admins/edit', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        }).then(async (response) => {
            const res = await response.json();

        })
        router.push('/admin')
    }
    useEffect(() => {
        if (!router.isReady) return;
        const loadData = async () => {
            // Les parametres => le id quoi
            var id = router.query.id;
            // requete vers le serveur
            fetch('/api/admins/' + id)
                .then(async (res) => {
                    const data = await res.json();
                    setTitle(data.title);
                    setPrice(data.price);
                    setDescription(data.description);
                });
        };
        loadData();
    }, [router.isReady]);

    return (
        <>
            <div className='container-lg'>
                <div className='col'>
                    <div className='formular'>
                        <div className='form'>

                            <form onSubmit={handSubmit}>

                                <h1>Update {title.id}</h1>

                                {/* <Image src={pic} className='card-img-top' alt='some images' /> */}
                                <label>Nom</label>
                                <input
                                    className='p-y'
                                    type="text"
                                    required
                                    placeholder={title.id}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label>Prix</label>
                                <input
                                    className='p-y'
                                    type="text"
                                    required
                                    placeholder={price.id}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label>Description</label>
                                <input
                                    className='p-y'
                                    type="text"
                                    required
                                    placeholder={description.id}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <button className='btn-custom'
                                    type="submit"
                                >
                                    Update
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