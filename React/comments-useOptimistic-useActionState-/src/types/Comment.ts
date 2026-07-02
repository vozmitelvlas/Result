export interface Comment {
    id: string,
    text: string,
    author: string,
    postId: string,
    createdAt: string,
}
export interface State {
    comments: Comment[],
    status: 'ok' | 'failed' | null;
}
export type ActionPayload = { type: 'ADD', comment: Comment; } | { type: 'GET'; };