window.addEventListener('load', () => {
    const toTop = document.querySelector(".to-top")

    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active")
        }
    })

    toTop.addEventListener("click", ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

});


    bootstrapEnters()
    bootstrapSayFunc()
    bootstrapSayFuncDisappear()
    cssSayFunc()
    cssSayFuncDisappear()



    
    let loader = document.getElementById("loader");

    function LoaderblockScroll(){
        if(loader.style.display == "flex"){
            document.body.classList.toggle("LoaderblockScroll")
        }
        else{
            null
        }
    }






//Switcher to "Dark/Light" Mode
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})



// Smooth scroll to contact
let contact = document.getElementById("contact")
let footer = document.getElementById("footer")

contact.addEventListener("click", (e)=>{
    footer.scrollIntoView({behavior: "smooth"});
})



// Thunder background Effect Functions

let thunderCloudsWrapper = document.querySelector(".thunder-clouds-wrapper");
let thunder = document.getElementById("thunder");

    function darkLight() {
        // Define random position depending on a Width & Height of the screen
        let randLeftRightPosition = Math.floor(Math.random() * document.body.clientWidth)
        let randTopBottomPosition = Math.floor(Math.random() * (document.body.clientHeight - thunderCloudsWrapper.clientHeight ))

        // console.log((thunderCloudsWrapper.clientHeight))

        // Assign random position on the screen to "thunderCloudsWrapper" element
        thunderCloudsWrapper.style.left = randLeftRightPosition + "px"
        thunderCloudsWrapper.style.top = randTopBottomPosition + "px"



        // Define random Width & Height of the "thunder" element
        let randWidthAndHeight = Math.floor(Math.random() * 100)

        // Assign random Width & Height on the "thunder" element
        thunder.style.width = randWidthAndHeight + "px"
        thunder.style.height = randWidthAndHeight + "px"



        // Define & Assign random border radius to the "thunder" element
        let randBorderRadius =  Math.floor(Math.random() * 500)
        thunder.style.borderRadius = randBorderRadius + "%"



        let thunderPower = Math.floor(Math.random() * 70)
        let key = thunder.style.boxShadow = `1px 1px ${thunderPower}px ${thunderPower}px rgb(195, 207, 30)`
        // console.log(key)
    }

    darkLight()    


    
    // Calling "darkLight" function with intervals
    function mysetInterval(){
        let intervalId = setInterval(() => {
            clearInterval(intervalId)
            mysetInterval()
            darkLight()
        }, 300);
    }

    mysetInterval()





const bootstrap = document.getElementById("bootstrap")
const bootstrapSay = document.getElementById("bootstrapSay")

const cssSay = document.getElementById("cssSay")




function bootstrapEnters(){
    setTimeout(() => {
        bootstrap.classList.remove(".bootstrap");
        bootstrap.classList.add("bootstrapEnterAnimated");
    }, 10000);
}


function bootstrapSayFunc(){
    setTimeout(() => {
        bootstrap.classList.remove("bootstrapEnterAnimated")
        bootstrap.classList.add("bootstrapWithoutEnterAnimated")
        bootstrapSay.style.display = "flex";
    }, 11000);
}

function bootstrapSayFuncDisappear(){
    setTimeout(() => {
        bootstrapSay.style.display = "none";
    }, 13500);
}







function cssSayFunc(){
    setTimeout(() => {
        cssSay.style.display = "flex";
    }, 13500);
}

function cssSayFuncDisappear(){
    setTimeout(() => {
        cssSay.style.display = "none";
    }, 16500);
}





const cube = document.querySelectorAll('.cube')
// console.log(cube)


cube.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('throwingCubeClass');


    setTimeout(() => {
        item.classList.remove('throwingCubeClass')
    }, 1000);


        let itemSay = document.createElement("div");
        itemSay.classList.add("ouch")
        itemSay.style.display = "flex"

        let OuchText = document.createElement("p");
        let OuchTextArray = ["Ouch!", "Enough!", "Come on!", "Please don't...", "Why?...", 
                             "Do you wanna kill me?", "What the...", "Hold on!", "Restrain yourself", "Easy !",
                             "Just keep Scrolling", "Leave me alone!..."]
        let randOuchText = Math.floor(Math.random() * OuchTextArray.length)
        OuchText.innerHTML = `${OuchTextArray[randOuchText]}`

    setTimeout(() => {
        item.append(itemSay)
        itemSay.append(OuchText)
        // item.parentNode.replaceChild(OuchText, listItem);
    }, 800);

    setTimeout(() => {
        itemSay.remove()
    }, 1500);
  })
})



const cubeArray = Object.keys(cube)
// console.log(cubeArray)




