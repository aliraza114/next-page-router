import { useRouter } from 'next/router';

function NewsDetailPage() {
    const router = useRouter();

    router.query.newsId;

    return (
        <h1>
            News Details
        </h1>
    )
}

export default NewsDetailPage;