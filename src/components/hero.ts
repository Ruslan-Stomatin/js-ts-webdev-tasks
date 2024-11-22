export function headAndHero() {
    const head = document.createElement('div')
    head.setAttribute('class', 'head');
    head.innerHTML = `
    <header>
    <h1 data-i18n="partyTime">Party Time!</h1>

    <nav>
        <a href="#home" id="home" data-i18n="home">Home</a>
        <a href="#gallery" id="gallery" data-i18n="gallery">Gallery</a>
        <a href="aboutParty" id="about-party" data-i18n="aboutParty">About Party</a>
        <a href="reservation" id="reservation" data-i18n="reservation">Reservation</a>
        <a href="contacts" id="contacts" data-i18n="contacts">Contacts</a>
        <a href="english" class="langChangeEn" id="lang-en" data-i18n="langEn">EN</a>
        <a href="arabic" class="langChangeAr" id="lang-ar" data-i18n="langAr">عرب</a>
    </nav>

    <button class="reserv-button" data-i18n="reservation">Reservation</button>
</header>

<div class="hero">

    <div class="dateWithTitle">

    <div class="date">
        <img src="/src/assets/calendar.png" width="22" height="22" alt="Calendar">
        <a class="date" data-i18n="reservationDate"> 31 October 2023</a>
         <h2 data-i18n="halloweenParty">IT'S HALLOWEEN PARTY O'CLOCK!</h2>
        </div>
    </div>

    

    <div class="arrow-down">
        <img src="/src/assets/arrow-down.png" alt="arrow down">
    </div>
</div>
`

    return head;
} 

