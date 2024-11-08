import {NextRequest, NextResponse} from 'next/server'
import {NotionAPI} from 'notion-client'
import {ExtendedRecordMap} from 'notion-types'

const notion = new NotionAPI()

export const dynamic = 'force-static'

interface PageProps {
    params: Promise<{ notionId: string }>
}

export async function GET(
    request: NextRequest,
    {params}: PageProps
) {
    const {notionId} = await params

    if (!notionId) {
        return NextResponse.json({error: 'Page ID is required'}, {status: 400})
    }

    try {
        const recordMap: ExtendedRecordMap = await notion.getPage(notionId)

        // Extract basic page info
        const pageBlock = Object.values(recordMap.block).find(
            (block) => block.value.type === 'page'
        )

        if (!pageBlock) {
            return NextResponse.json({error: 'Page not found'}, {status: 404})
        }

        return NextResponse.json(recordMap)
    } catch (error) {
        console.error('Error fetching Notion page:', error)
        return NextResponse.json({error: 'Failed to fetch page'}, {status: 500})
    }
}