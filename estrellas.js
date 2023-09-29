const universo = document.getElementById('universo');

for (let i = 0; i < 150; i++) {
    const estrella = document.createElement('div');
    estrella.className = 'estrella';
    estrella.style.top = Math.random() * 100 + 'vh';
    estrella.style.left = Math.random() * 100 + 'vw';
    universo.appendChild(estrella);
}
