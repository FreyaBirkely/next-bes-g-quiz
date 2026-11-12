const veryTrue = document.querySelector(".true");
const notTrue = document.querySelector(".false");
let error = document.querySelector(".error");




document.querySelectorAll(".question__btn").forEach((button) => {
    button.addEventListener("click", (event) => {
        const btn = event.currentTarget;

        if (btn.classList.contains("true")) {
            alert(`Girl!!!!!! you so smart its correct`)
            btn.classList.add("pink")
        } else if (btn.classList.contains("false")) {
            alert(`Girl... You know that isnt true....`)
            btn.classList.add("red")
        }
    })
})

// document.querySelectorAll("red").forEach((button) => {
//     button.addEventListener("click", (event) => {
//         const btn = event.currentTarget;

//         if (btn.classList.contains("red")) {
//             btn.classList.add("big")
//         }
//         else if (btn.classList.contains("false")) {
//             btn.classList.add("pink")
//         }
//     })
// })


