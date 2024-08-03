function setThemes(namethemes){
    localStorage.setItem('theme',namethemes)
    document.documentElement.className=namethemes
    document.body.className=namethemes !=='light-theme'?'bg-DarkModeBody':'bg-LightModeBody '
    window.dispatchEvent(new Event("storage"))
}
function keepThemes(){
    const theme = localStorage.getItem('theme');
    if (theme==="dark-theme") {
        setThemes("light-theme");
    } else if(theme==="light-theme"){
        setThemes("dark-theme")
    } else{
        setThemes('dark-theme');
    }
}
module.exports={
    keepThemes,
    setThemes
}