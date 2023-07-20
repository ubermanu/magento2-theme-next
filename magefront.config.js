import less4 from 'less'
import less from 'magefront-plugin-less'

export default {
    plugins: [
        less({
            less: less4
        }),
        'magefront-plugin-requirejs',
        'magefront-plugin-js-translations',
    ]
}
