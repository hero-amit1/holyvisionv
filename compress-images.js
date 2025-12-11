import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
    try {
        const files = await imagemin([join(__dirname, 'src/images/*.{jpg,jpeg,png,webp}')], {
            destination: join(__dirname, 'public/images'),
            plugins: [
                mozjpeg({ quality: 70 }),
                pngquant({ quality: [0.6, 0.8] })
            ]
        });

        console.log('Images optimized:', files);
    } catch (err) {
        console.error(err);
    }
})();
