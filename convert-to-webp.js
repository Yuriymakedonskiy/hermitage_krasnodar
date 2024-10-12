import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['src/images/*.{jpg,png,webp}'], {
    destination: 'src/wb',
    plugins: [
      imageminWebp({ quality: 10 }) // настройка качества
    ]
  });
  console.log('Images converted to WebP format');
})();
