import Link from 'next/link';

function NewsPage() {
    return (
        <>
        <h1>
            Meetup Page
        </h1>
        <ul>
            <li>
                <Link href={'/news/next'}>
                    Next JS
                </Link>
            </li>
            <li>
                <Link href={'/news/react'}>
                    React JS
                </Link>
            </li>
        </ul>
        </>
    )
}

export default NewsPage;