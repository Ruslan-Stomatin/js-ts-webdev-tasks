export function createFooter() {
    const templateFooter = document.getElementById('footer-template') as HTMLTemplateElement;
  
    if (!templateFooter) {
      throw new Error('Template с ID footer-template не найден!');
    }
  
    // Клонируем содержимое шаблона
    const clone = templateFooter.content.cloneNode(true);
  
    // Находим элементы внутри клона
    const title = (clone as DocumentFragment).querySelector("h2") as HTMLElement;
    title.textContent = 'PHONE RESERVATION? (+1) 987 46 52 ';
    title.setAttribute('data-i18n', 'titleFooter')

    const socialIcons = (clone as DocumentFragment).querySelector(".social-icons")
    if (socialIcons) {
        const img = document.createElement('img')
        img.src = '/src/assets/icon.png';

        socialIcons.append(img);
    };

    // Теперь нужно добавить этот клон в DOM
      document.body.append(clone);

    return (clone as DocumentFragment).querySelector('footer') as HTMLElement;
  }
  
