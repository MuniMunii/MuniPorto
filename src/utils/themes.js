function setThemes(namethemes){
    localStorage.setItem('theme',namethemes)
    document.documentElement.className=namethemes
}
function keepThemes(){
    const theme = localStorage.getItem('theme');
    if (theme) {
        setThemes(theme);
        console.log(`Theme is set to ${theme}`);
    } else {
        setThemes('theme-dark');
        console.log('Theme is set to dark by default');
    }
}
module.exports={
    keepThemes,
    setThemes
}