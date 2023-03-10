import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function comtsPage() {

    const [comments, setComts] = useState([]);
    const router = useRouter();
    // Supprimer un commmentaire et mettre à jour dans le client
    const handleDelete =  (id) => {
        fetch("/api/comments/"+id+"/delete")
        .then(async (res) => {
            const data = await res.json();
            console.log(data);
            setComts(data);
        });
        
    }
    // Au demarrage, récupérer tous els commentaires
    useEffect(() => {
        if(!router.isReady) return;
        const loadData = async () => {
            fetch('/api/comments')
            .then(async(res) => {
                const data = await res.json();
                setComts(data);
                
            })
        };
        loadData();
    }, [router.isReady]);
    // Affichage
    return (
        <>
            {
                comments.map(comment => {
                    return (
                        <div key={comment._id}>
                            {comment._id} - {comment.text} - {comment.name}
                        <a href='#' onClick={() => handleDelete(comment._id)}>Delete</a></div>
                    )
                })
            }

            <Link href="/blog/create"> Commenter </Link>
        </>
    )
}

export default comtsPage;