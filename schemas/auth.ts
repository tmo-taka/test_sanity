// schemas/auth.ts
export default {
    name: 'auth',
    type: 'document',
    fields: [
        {
            name: 'user',
            title: 'ユーザー名',
            type: 'string',
        },
        {
            name: 'password',
            title: 'パスワード',
            type: 'string',
        },
    ]
}
