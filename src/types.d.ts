interface RecordMap {
    block: Block;
    collection: Collection;
    team: Team;
    collection_view: CollectionView;
    notion_user: NotionUser;
    space: Space;
    collection_query: CollectionQuery;
    signed_urls: SignedUrls;
}

interface Block {
    [blockId: string]: BlockItem;
}

interface BlockItem {
    value: BlockValue;
    role: string;
}

interface BlockValue {
    id: string;
    version: number;
    type: string;
    view_ids?: string[];
    properties?: any;  // Specific properties vary depending on block type (text, image, etc.)
    content?: string[];  // List of block IDs that are children of this block
    format?: Format;  // Format information like width, height, background color, etc.
    display_source?: string;  // URL of the image or video
    permissions?: any[];  // Permissions array for sharing or editing access
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: string;
    alive: boolean;
    copied_from?: string;  // Optional field, reference to the original block if copied
    file_ids?: string[];  // For blocks containing files (e.g., images or PDFs)
    space_id: string;
    // Add more attributes depending on your block's use case
}

interface Format {
    page_cover: string;  // URL of the page cover image
    copied_from_pointer: any;  // Pointer to the original block if copied
    page_cover_position: number;  // Position of the page cover image
}

interface Collection {
    [collectionId: string]: {
        value: CollectionValue;
        role: string;
    };
}

interface CollectionValue {
    id: string;
    name: string[];  // Title of the collection
    schema: any;  // Collection schema that defines the structure of the database
    content?: string[];  // List of items in this collection
    format?: any;  // Format settings for viewing this collection
    parent_id: string;
    parent_table: string;
    alive: boolean;
    created_time: number;
    last_edited_time: number;
    space_id: string;
}

interface Team {
    [teamId: string]: {
        value: TeamValue;
        role: string;
    };
}

interface TeamValue {
    id: string;
    name: string;
    members: string[];  // List of user IDs in the team
    created_time: number;
    last_edited_time: number;
    space_id: string;
}

interface CollectionView {
    [viewId: string]: {
        value: CollectionViewValue;
        role: string;
    };
}

interface CollectionViewValue {
    id: string;
    name: string;
    type: string;  // Type of the view (e.g., "table", "list", "board")
    format: any;
    parent_id: string;
    parent_table: string;
    alive: boolean;
    created_time: number;
    last_edited_time: number;
    space_id: string;
}

interface NotionUser {
    [userId: string]: {
        value: NotionUserValue;
        role: string;
    };
}

interface NotionUserValue {
    id: string;
    name: string;
    email: string;
    avatar_url?: string;  // Optional, URL of the user's avatar
    created_time: number;
    last_edited_time: number;
}

interface Space {
    [spaceId: string]: {
        value: SpaceValue;
        role: string;
    };
}

interface SpaceValue {
    id: string;
    name: string;
    domain: string;  // Domain associated with this workspace
    permissions: any[];
    created_time: number;
    last_edited_time: number;
}

interface CollectionQuery {
    [collectionId: string]: any;  // Structure depends on the specific queries performed
}

interface SignedUrls {
    [fileId: string]: string;  // Maps file IDs to signed URLs
}