export function lookGalerry () {
    const gallerySection = document.createElement('section');
    gallerySection.setAttribute('class', 'gallery');

    const title = document.createElement('h2');
    title.textContent = 'HALLOWEEN MEMORIES';
    title.setAttribute('data-i18n', 'galleryTitle');
    gallerySection.append(title);

    const images = ['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png', 'img-5.png',
         'img-6.png', 'img-4.png', 'img-7.png', 'img-8.png', 'img-9.png',];

    const grid = document.createElement('div');
    grid.setAttribute('class', 'gallery-grid');

    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = `/src/assets/${src}`;
        grid.append(img);
    });

    gallerySection.append(grid);
    return gallerySection;
};