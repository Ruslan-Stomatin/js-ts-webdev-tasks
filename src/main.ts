import { headAndHero } from "./components/hero";
import { lookGalerry } from "./components/gallery";
import { createFooter } from "./components/footer";


document.addEventListener('DOMContentLoaded', () => {
    const hero = headAndHero();
    document.body.append(hero);

    const gallery = lookGalerry();
    document.body.append(gallery);

    createFooter();
});




// внизу изменение языка


interface LocaleMessages {
  [key: string]: string;
}

const LOCALES: { [key: string]: LocaleMessages } = {
  en: {
    partyTime: "Party Time!",
    home: "Home",
    gallery: "Gallery",
    aboutParty: "About Party",
    reservation: "Reservation",
    contacts: "Contacts",
    reservationDate: "31 October 2023",
    halloweenParty: "IT'S HALLOWEEN PARTY O'CLOCK!",
    galleryTitle: 'HALLOWEEN MEMORIES',
    titleFooter: "Phone Reservation? (+1) 987 46 52"
  },
  ar: {
    partyTime: "وقت الحفلة!",
    home: "الصفحة الرئيسية",
    gallery: "المعرض",
    aboutParty: "حول الحفلة",
    reservation: "الحجز",
    contacts: "الاتصال",
    reservationDate: "31 أكتوبر 2023",
    halloweenParty: "حان وقت حفلة الهالوين!",
    galleryTitle: 'ذكريات الهالوين',
    titleFooter: "هل ترغب بالحجز عبر الهاتف؟ (+1) 987 46 52"
  }
};

let currentLocale: 'en' | 'ar' = 'en';


function fetchLocaleFromBackend(locale: 'en' | 'ar'): LocaleMessages {

  let localeMessages = LOCALES[locale];
  
  setTimeout(() => {
    currentLocale = locale;  // Обновляем текущий язык
    translateAllTextOnPage(); // Переводим страницу
    updatePageDirection();    // Обновляем направление текста
  }, 2000);
  
  return localeMessages;
}

function translateAllTextOnPage(): void {
  const localeMessages = LOCALES[currentLocale];
  const elementsForTranslation = document.querySelectorAll<HTMLElement>('[data-i18n]');

  elementsForTranslation.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key && localeMessages[key]) {
      element.innerText = localeMessages[key];
    }
  });
}

function changeLocale(newLocale: 'en' | 'ar'): void {
  const localeMessages = fetchLocaleFromBackend(newLocale); 
  LOCALES[newLocale] = localeMessages; // Обновляем объект локализации
  translateAllTextOnPage(); // Переводим страницу
  updatePageDirection();    // Обновляем направление текста
}

function updatePageDirection(): void {
  const body = document.body;

  if (currentLocale === 'ar') {
    body.setAttribute('dir', 'rtl');
    body.style.textAlign = 'right';
  } else {
    body.setAttribute('dir', 'ltr');
    body.style.textAlign = 'left';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const langEnButton = document.querySelector<HTMLButtonElement>('#lang-en');
  const langArButton = document.querySelector<HTMLButtonElement>('#lang-ar');

  langEnButton?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    changeLocale('en'); 
  });

  langArButton?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    changeLocale('ar'); 
  });

  translateAllTextOnPage(); 
  updatePageDirection();    
});
