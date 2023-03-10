import { useState } from "react";

const Create = () => {
    const [name, setUser] = useState('');
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    // Cree un nouveau commentaire
    const handSubmit = (e) => {
        e.preventDefault();
        const comment = { name, text };

        fetch('/api/comments/new', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment)
        }).then(() => {
            
        })
    }

    // Récupérer tout les commentaires (fetch = récupérer)
    const fetchComnts = async () => {
        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data)
    }

    const editComnts = async () => {
        const res = await fetch('/api/comments');
        const data = await res.json();
        editComnts(data)
    }

    return (

        <>

            <div className='formular'>

                <div className='form'>

                    <h1> Ajouter un commentair</h1>
                    <form onSubmit={handSubmit}>
                        <label>Nom</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setUser(e.target.value)}
                        />

                        <label>Commentaire</label>
                        <input
                            type="text"
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button
                            type="submit"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>

                <button onClick={fetchComnts}>All comments</button>
                {
                    comments.map(comment => {
                        return (
                            <div className="block-comment">
                                <div className="comment">
                                    <h3 key={comment.id}>
                                        {comment.id} {comment.name}
                                    </h3>
                                    <p key={comment.id}>
                                        {comment.id} {comment.text}
                                    </p>
                                </div>

                                 <a href={'/blog/edit/' + comment._id} className="btn" > Edit</a>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Create;