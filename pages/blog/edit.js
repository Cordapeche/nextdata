import { useState } from "react";

const Create = () => {
    const [name, setUser] = useState('');
    const [text, setText] = useState('');

    const handSubmit = (e) => {
        e.preventDefault();
        const comment = { name, text };

        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comment)
        };

        fetch('/api/comments/edit', options)
        .then(() => {

        });
    }

    return (

        <>
            <div className='formular'>
                <div className='form'>
                    <h1> Editer le commentait </h1>
                    <form onSubmit={handSubmit}>
                        <label>Nom</label>
                        <input
                            type="text"
                            placeholder={name.id}
                            value={name}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <label>Commentaire</label>
                        <input
                            type="text"
                            placeholder={text.id}
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
        </>
    )
}

export default Create;