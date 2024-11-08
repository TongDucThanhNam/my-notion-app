import { notFound } from 'next/navigation'

interface PageProps {
    params: Promise<{ pageId: string }>
}

async function getNotionPage(pageId: string) {
    // Use the absolute URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/notion/${pageId}`, {
        next: { revalidate: 3600 } // Revalidate every hour
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page({ params }: PageProps) {
    const { pageId } = await params

    if (!pageId) {
        notFound()
    }

    try {
        const recordMap = await getNotionPage(pageId)

        return <p>123</p>

    } catch (err) {
        console.error('Error fetching Notion page:', err)
        notFound()
    }
}