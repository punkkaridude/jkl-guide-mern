export const module = {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }
    ],
};