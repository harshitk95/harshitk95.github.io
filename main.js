var theme = "dark";


function mysteryClick(address) {
    let root = document.querySelector(":root")
    root.style.setProperty("--halycon", "#f09d51")
}

function abstractClick(element_id){
    const hook = document.getElementById(element_id);

    if (hook.style.display === "none" || hook.style.display === ""){
        hook.style.display = "block";
    }
    else{
        hook.style.display = "none";
    }
}

function open_tab(link_url){
    window.open(link_url, '_blank').focus();
}

function click_buzzword(element_id){
    let hook = document.getElementById(element_id);
    let all_buzzwords = document.getElementsByClassName("buzzword")

    for (let i=0;i<all_buzzwords.length;i++){
        let current_buzzword = document.getElementById(all_buzzwords[i].id);
        if ((current_buzzword.id !== element_id) && (current_buzzword.style.display) !== "none"){
            current_buzzword.style.display = "none";
        }
    }


    if (hook.style.display === "none" || hook.style.display === ""){
        hook.style.display = "flex";
    }
    else{
        hook.style.display = "none";
    }
}

function project_image_click(element_to_hide, element_to_show){
    const hook_hide = document.getElementById(element_to_hide);
    const hook_show = document.getElementById(element_to_show);

    if (hook_hide.style.display === "none" || hook_hide.style.display === ""){
        hook_hide.style.display = "flex";
        hook_show.style.display = "none";
    }
    else{
        hook_hide.style.display = "none";
        hook_show.style.display = "flex";
    }

}

function click_recent(input_list, title_string){
    for (let ii=0;ii<input_list.length;ii++){
        let hook = document.getElementById(input_list[ii])
        console.log(hook.classList);
        if (!hook.classList.contains("dropdown")){
            hook.style.display = "block";
            hook.classList.add("dropdown");
        }
        else{
            hook.classList.remove("dropdown");
            hook.style.display = "none";
        }
    }

    let hook = document.getElementById(title_string[0]);
    if (hook.innerText.includes("+")){
        hook.innerText = "\u2014 " + title_string[1] + "  \u2191";
    }
    else{
        hook.innerText = "+ " + title_string[1] + "  \u2193";
    }
}

function click_experience(address){
    let hook = document.getElementById(address);
    if (hook.style.display === "none" || hook.style.display === "" || hook.style.display === "hidden"){
        hook.style.display = "flex";
        hook.classList.add("dropdown");
    }
    else{
        hook.style.display = "none";
        hook.classList.remove("dropdown");
    }
}

function blink() {
    let el = document.getElementById("logoBlock");
    let foot = document.getElementById("emailid");
    el.classList.remove("blink")
    foot.classList.remove("blink")


    setTimeout(function() {
        el.classList.add("blink")
        foot.classList.add("blink")
    }, 5);
}

function changeTheme() {
    let el = document.getElementById("logoBlock");
    let foot = document.getElementById("emailid");
    el.classList.remove("blink")
    foot.classList.remove("blink")


    setTimeout(function() {
        el.classList.add("blink")
        foot.classList.add("blink")
    }, 5);
}

window.addEventListener("scroll", () => {
    const name_holder = document.getElementById("small_name")
    const current = window.scrollY;
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log(current);
    // console.log(name_holder.style.display)
    // console.log(w)
    if (w < 1200){
        return 0
    }
    if (window.scrollY >= 204){
        name_holder.style.display = "flex"
        name_holder.style.transition = "linear"
    }
    else{
        name_holder.style.display = "none"
    }
})
