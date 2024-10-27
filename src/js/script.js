const scrollButton = document.getElementById("scroll__button")
const intensive = document.getElementById("intensive")

function onClick(){
    intensive.scrollIntoView({
        behavior: "smooth"
    })
}

scrollButton.addEventListener("click", onClick)

// 

const upButton = document.getElementById("to__top__button")

function scrollSite(){
    if(window.scrollY > 200){
        upButton.style.display = "flex"
    }
    else{
        upButton.style.display = "none"
    }
}

window.addEventListener("scroll", scrollSite)

//

const model = document.getElementById("model")
const openModelButton = document.getElementById("open__Model__Button")

function onClickModelButton(){
    model.style.display = "block"
}

openModelButton.addEventListener("click", onClickModelButton)

//

const closeModel = document.getElementById("close__model")

function closeModelButton(){
    model.style.display = "none"
}

closeModel.addEventListener("click", closeModelButton)