function Title(tag = "h1", content) {
    const head = document.createElement(tag);

    head.textContent = content;

    return head;
};

function ExploreShowcase() { 
    const button1 = document.createElement('button')
    button1.textContent = 'Explore Showcase';
    button1.setAttribute('class', 'explore-button');

    return button1;
}

function Blocks(blocksData) {

    const div = document.createElement('div')
    div.setAttribute('class', 'block')

    const title = document.createElement('h2')
    title.textContent = blocksData.title;

    const title2 = document.createElement('h2')
    title2.textContent = blocksData.title2;
    title2.setAttribute('class', 'title2')

    const text = document.createElement('p')
    text.textContent = blocksData.text;

    const button = document.createElement('button')
    button.textContent = blocksData.button;

    if (blocksData.buttonColor) {
        button.style.backgroundColor = blocksData.buttonColor;
    }

    if (blocksData.buttonTextColor) {
        button.style.color = blocksData.buttonTextColor || "#1E0E62"; // тут цвет по умолчянию ставлю
    }

    if (blocksData.image) {
        div.style.backgroundImage = `url(${blocksData.image})`;
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
    } else if (blocksData.backgroundColor) {
        div.style.backgroundColor = blocksData.backgroundColor;
    }

    if (blocksData.textColor) {
        div.style.color = blocksData.textColor; 
    }

    div.append(title, title2, text, button);

    return div;
}

function Grid() {
   const head = document.createElement("p")

   head.setAttribute('class', 'grid')

   return head;
}

const blocksData = [
    {title2: "Startup Framework", text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", button: "Explore", backgroundColor: "#EBEAED", textColor:"background: #1E0E62",buttonColor:"#FFFFFF", buttonTextColor:"#1E0E62"},
    {title2: "Web Generator", text: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", button: "Explore", backgroundColor: "#FFFFFF", textColor:"#15143966",buttonColor:"#25DAC5", buttonTextColor:"#FFFFF"},
    {title: "Slides 4", text: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.", button: "Explore", backgroundColor: "#482BE7", textColor:"#FFFFFF",buttonColor:"#FFFFFF", buttonTextColor:"#1E0E62" },
    {title: "Postcards", text: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.", button: "Explore", image: './assets/img/Placeholder.png', textColor:"#FFFFFF",buttonColor:"#FFFFFF", buttonTextColor:"#1E0E62"}
];

document.addEventListener("DOMContentLoaded", () => {

    const h1 = Title("h1", "Last works");
    const button1 = ExploreShowcase()
    
    const head = document.createElement('div')
    head.setAttribute('class', 'head-container')
    head.append(h1, button1)

    document.body.append(head)
// --------------------------------//

    const grid = Grid()
    document.body.append(grid);

    blocksData.forEach(block => {
        const blockElement = Blocks(block);
        grid.append(blockElement)
    })
})
