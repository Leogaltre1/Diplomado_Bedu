//Access to DOM

// --- Select elements by tag => Element's colection from HTML
// You can use body or without is better without it
const paragraphss = document.body.getElementsByTagName('p');

// Is not an array looks like one, but is not
// But we can use the next code for use like an array

paragraphss.map((x) => console.log(x));
for (let i; i < paragraphss.length: i++)



// Para id repetidos te trae solo el primer elemento 