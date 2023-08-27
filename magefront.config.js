import less4 from 'less';

export default {
    plugins: [
        [
            'magefront-plugin-less',
            {
                compiler: less4,
            },
        ],
        'magefront-plugin-requirejs-config',
        'magefront-plugin-js-translation',
    ],
};
