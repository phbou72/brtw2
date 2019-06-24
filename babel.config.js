module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            "@babel/preset-react",
            {
                targets: "> 0.25%, not dead",
                useBuiltIns: "usage",
            },
        ],
    ];

    const plugins = [];

    return {
        presets,
        plugins,
    };
};
