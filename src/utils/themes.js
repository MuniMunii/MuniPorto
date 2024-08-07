function setThemes(namethemes){
    localStorage.setItem('theme',namethemes)
    document.documentElement.className=namethemes
    document.body.className=namethemes === 'light-theme'?'bg-LightModeBody':'bg-DarkModeBody '
    window.dispatchEvent(new Event("storage"))
}
function keepThemes(){
    const theme = localStorage.getItem('theme');
    if (theme==="dark-theme") {
        setThemes("dark-theme");
    } else if(theme==="light-theme"){
        setThemes("light-theme")
    } else{
        setThemes('dark-theme');
    }
}
module.exports={
    keepThemes,
    setThemes
}