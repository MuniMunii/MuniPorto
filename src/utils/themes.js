function setThemes(namethemes){
    localStorage.setItem('theme',namethemes)
    document.documentElement.className=namethemes
}
function keepThemes(){
    const theme = localStorage.getItem('theme');
    if (theme==="dark-theme") {
        setThemes("light-theme");
        console.log(`Theme is set to ${theme}`);
    } else if(theme==="light-theme"){
        setThemes("dark-theme")
        console.log(`theme is set to${theme}`);
    } else{
        setThemes('dark-theme');
        console.log('Theme is set to dark by default');
    }
}
module.exports={
    keepThemes,
    setThemes
}