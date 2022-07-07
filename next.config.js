/** @type {import('next').NextConfig} */

module.exports = {
    async headers() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json'
                    }
                ]
            }
        ];
    },
    async redirects() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                destination: '/api/apple-app-site-association',
                permanent: true
            }
        ];
    }
};
