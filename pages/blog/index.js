import Link from 'next/link';
import { useState } from 'react';

function comtsPage() {

    const [comments, setComts] = useState([]);

    const fetchComnts = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComts(data)

        console.log(data);
    }
    return (
        <>

            <button onClick={fetchComnts}>All comments</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.id} {comment.text}
                        </div>
                    )
                })
            }

            <Link href="/blog/create"> Commenter </Link>
        </>
    )
}

export default comtsPage;