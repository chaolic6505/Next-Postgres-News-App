/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    domains: [
        'logos-download.com',
        'avatars.dicebear.com',
        'cdn-icons-png.flaticon.com',
    ],
};
