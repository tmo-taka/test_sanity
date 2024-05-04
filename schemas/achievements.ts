// schemas/achievements.ts
export default {
    name: 'achievement',
    type: 'document',
    title: 'Achievements',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'string',
        },
        {
            name: 'site_url',
            title: 'サイトURL',
            type: 'url',
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
            name: 'main_visual',
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
            name: 'create_date_from',
            title: '制作期間（from）',
            type: 'date',
            options: {
                dateFormat: 'YYYY/MM',
            }
        },
        {
            name: 'create_date_to',
            title: '制作期間（to）',
            type: 'date',
            options: {
                dateFormat: 'YYYY/MM',
            }
        },
        {
            name: 'member',
            title: 'サイト開発メンバー',
            type: 'object',
            fields: [
                {name: 'dir', type: 'number', title: 'ディレクター', initialValue: 0},
                {name: 'design', type: 'number', title: 'デザイン', initialValue: 0},
                {name: 'front', type: 'number', title: 'フロントエンド', initialValue: 0},
                {name: 'back', type: 'number', title: 'バックエンド', initialValue: 0}
            ]
        },
        {
            name: 'contents',
            title: '内容',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'published',
            title: '公開フラグ',
            type: 'boolean',
            initialValue: false
        },
    ]
}