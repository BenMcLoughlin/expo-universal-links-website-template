/** @type {import('next').NextConfig} */

module.exports = {
    headers: [
        {
            source: '/.well-known/apple-app-site-association',
            headers: [
                {
                    key: 'Content-Type',
                    value: 'application/json'
                }
            ]
        }
    ]
};
