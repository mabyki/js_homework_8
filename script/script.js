let head = document.head;

let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8');

let title = document.createElement('title');
title.innerHTML = 'Call to action';

let preconnect = document.createElement('link');
preconnect.setAttribute('rel', 'preconnect');
preconnect.setAttribute('href', 'https://fonts.gstatic.com');

let fonts = document.createElement('link');
fonts.setAttribute('rel', 'stylesheet');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');

head.appendChild(metaUTF8);
head.appendChild(title);
head.appendChild(preconnect);
head.appendChild(fonts);



let divWrapper = document.createElement('div');
document.body.appendChild(divWrapper);

divWrapper.style.margin = '0 auto'
divWrapper.style.display = 'flex';
divWrapper.style.flexDirection = 'column';
divWrapper.style.justifyContent = 'center';
divWrapper.style.alignItems = 'center';



let containerTitle = document.createElement('div');
divWrapper.appendChild(containerTitle);

containerTitle.style.textAlign = 'center';



let containerBlock = document.createElement('div');
divWrapper.appendChild(containerBlock);

containerBlock.style.display = 'flex';



let divBlock1 = document.createElement('div');
containerBlock.appendChild(divBlock1);

divBlock1.style.padding = '0 100px';
divBlock1.style.width = '250px';
divBlock1.style.height = '500px';
divBlock1.style.border = '1px solid #e8e9ed';
divBlock1.style.display = 'flex';
divBlock1.style.flexDirection = 'column';
divBlock1.style.justifyContent = 'center';
divBlock1.style.alignItems = 'center';
divBlock1.style.textAlign = 'center';



let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
containerTitle.appendChild(h1);

h1.style.fontFamily = 'Arvo';
h1.style.fontSize = '36px';



let subtitle = document.createElement('p');
subtitle.innerHTML = 'But i must explain to you how all this mistaken idea of denouncing';
containerTitle.appendChild(subtitle);

subtitle.style.marginBottom = '50px';
subtitle.style.fontFamily = 'Open Sans';
subtitle.style.fontSize = '14px';
subtitle.style.color = '#9fa3a7';



let text = document.createElement('p');
text.innerHTML = 'freelance';
divBlock1.appendChild(text);

text.style.color = '#9fa3a7';
text.style.textTransform = 'uppercase';
text.style.fontFamily = 'Montserrat';
text.style.fontSize = '12px';
text.style.fontWeight = '700';
text.style.letterSpacing = '2.4px';



let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
divBlock1.appendChild(h2);

h2.style.fontSize = '36px';
h2.style.fontFamily = 'Arvo';
h2.style.color = '#212121';
h2.style.lineHeight = '46px';



let text1 = document.createElement('p');
text1.innerHTML = 'But i must explain to you how all this mistaken idea of denouncing';
divBlock1.appendChild(text1);

text1.style.fontFamily = 'Open Sans';
text1.style.fontSize = '12px';
text1.style.color = '#9fa3a7';
text1.style.lineHeight = '22px';



let button = document.createElement('button');
button.innerHTML = 'Start here';
divBlock1.appendChild(button);

button.style.marginTop = '50px';
button.style.padding = '20px 35px';
button.style.background = 'transparent';
button.style.border = '3px solid #ffc80a';
button.style.borderRadius = '30px';
button.style.textTransform = 'uppercase';
button.style.color = '#212121';
button.style.fontFamily = 'Montserrat'
button.style.fontWeight = '700';
button.style.fontSize = '12px';
button.style.letterSpacing = '2.4px';


let divBlock2 = divBlock1.cloneNode(true);
containerBlock.appendChild(divBlock2);

divBlock2.style.backgroundColor = '#8f75be';

divBlock2P = divBlock2.querySelector('p');
divBlock2H2 = divBlock2.querySelector('h2');
divBlock2Button = divBlock2.querySelector('button');
divBlock2P2 = divBlock2.querySelectorAll('p')[1];
divBlock2P.innerHTML = 'Studio';

divBlock2P.style.color = '#ffc80a';
divBlock2H2.style.color = '#fff';
divBlock2P2.style.color = '#fff';
divBlock2Button.style.color = '#fff';