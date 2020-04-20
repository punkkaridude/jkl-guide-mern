export const module = {
    devServer: {
        historyApiFallback: true
    },
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
    ]
};