import { useState, useEffect } from "react";
import { useRouter } from "next/router";



const Edit = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        var id = router.query.id;
        const comment = { name, text, id };

        fetch('/api/comments/edit',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(comment)
        }).then(async (response) => {
            const res = await response.json();
            if(res.error)
                alert(res.message);
            else
                setError(res.message);
            
            setTimeout(() => {
                setError("");
            }, 5000);
        })
    
        console.log("fchhfdcxhgrfd");
    }
    useEffect(() => {
        if(!router.isReady) return;
        const loadData = async () => {
            // Les parametres => le id quoi
            var id = router.query.id;
            // requete vers le serveur
            fetch('/api/comments/' + id )
            .then(async(res) => {
                const data = await res.json();
                setName(data.name);
                setText(data.text);
            });
        };
        loadData();
     }, [router.isReady]);

    return (
        
             <div className='formular'>
                <div className='form'>
                    <h1> Editer le commentait </h1>
                    {error}
                    <form onSubmit={handleSubmit}>
                        <label>Nom</label>
                        <input
                            type="text"
                            placeholder=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Commentaire</label>
                        <input
                            type="text"
                            placeholder=""
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button
                            type="submit"
                        >
                            Editer
                        </button>
                    </form>
                </div>
            </div>
        
    )
}

export default Edit;