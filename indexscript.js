const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const logo = document.getElementById('logo-footer');
const footer = document.querySelector('.footer-class');
const logo2 = document.querySelector('.altlogo');
const headband = document.querySelector('.headband');
const spotify = document.querySelector('.embedded');


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        logo.src="https://raw.githubusercontent.com/ClementPremartin/survivre-au-hellfest/dev/images/LogoKawai.png"
        logo2.src="https://raw.githubusercontent.com/ClementPremartin/survivre-au-hellfest/dev/images/LogoKawai.png"
        headband.style.backgroundImage = 'none';
        headband.style.backgroundColor = 'var(--secondary-color)';
        spotify.innerHTML= `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3hHmYc6mrl6NkmRW1ZwYvm?utm_source=generator"width="90%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        logo.src="https://raw.githubusercontent.com/ClementPremartin/survivre-au-hellfest/dev/images/logo-dark.png"
        logo2.src="https://raw.githubusercontent.com/ClementPremartin/survivre-au-hellfest/dev/images/logo-dark.png"
        spotify.innerHTML= `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZnlcbl9Edex?utm_source=generator" width="90%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
