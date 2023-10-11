// schemas/contents.ts
export default {
    name: 'content',
    type: 'document',
    title: 'Contents',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'コンテンツタグ',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'tag'}]
                }
            ]
        },
        {
            name: 'mainVisual',
            title: 'コンテンツ画像',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'slug',
            title: 'URLパス',
            type: 'slug',
        },
        {
            name: 'published',
            title: '公開フラグ',
            type: 'boolean',
            initialValue: false
        },
    ]
}