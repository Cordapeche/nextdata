import { useState } from "react";

const Create = () => {
    const [name, setUser] = useState('');
    const [text, setText] = useState('');
    const [comments, setComts] = useState([]);

    const handSubmit = (e) => {
        e.preventDefault();
        const comment = {
            name, text
        };

        fetch('mongodb://localhost:27017/commentaries', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment)
        }).then(() => {
            console.log('new blog added');
        })


    }

    const fetchComnts = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComts(data)
    }

    return (
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
                        value="Envoyer"
                    >
                        Envoyer
                    </button>
                </form>
            </div>

            <button onClick={fetchComnts}>All comments</button>
            {
                comments.map(comment => {
                    return (
                        <>
                            <div key={comment.id}>
                                {comment.id} {comment.name}
                            </div>
                            <div key={comment.id}>
                                {comment.id} {comment.text}
                            </div>

                        </>

                    )
                })
            }
        </div>
    )
}

export default Create;