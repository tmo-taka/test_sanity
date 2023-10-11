// schemas/contents.ts
export default {
    name: 'tag',
    type: 'document',
    title: 'Tags',
    fields: [
        {
            name: 'id',
            title: 'タグID',
            type: 'slug',
        },
        {
            name: 'name',
            title: 'タグ名',
            type: 'string',
        },
    ]
}