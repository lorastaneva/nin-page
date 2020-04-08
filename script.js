window.addEventListener("load", setup);

function setup(){
    const h2s = document.querySelectorAll(".discography main h2");
    if(h2s){
        h2s.forEach(h2 => {
            h2.addEventListener("click", e=>{
                h2.classList.toggle("open");
                h2.nextElementSibling.classList.toggle("open");
            })
        })
    }
}
