document.addEventListener("DOMContentLoaded", () => {

    let btnBurger = document.querySelector(".burger");
    let pageNavigation = document.querySelector(".classItem");

    btnBurger.addEventListener("click", () => {
        pageNavigation.classList.toggle("visible");
    });

    pageNavigation.addEventListener("touch", () => {
        console.log("Poszłooooo");
        pageNavigation.classList.remove("visible");
    });


    // let btnSendEmail = document.querySelector(".classBtn_footer");
    // let formInputField = document.querySelector(".message-footer");
    // btnSendEmail.addEventListener("click", () => {
    //     console.log(formInputField);
    //     console.log("dziłaam");
    //     if (formInputField.children[1].value === "" || formInputField.children[2].value === "" || formInputField.children[3].value === "" || formInputField.children[4].value === "") {
    //         // formInputField.children[6].style.visibility = "visible";
    //         error.push("Pole email musi zawierać znak @ i co najmniej 3 znaki");
    //         console.log("brak");
    //     } else {
    //         formInputField.children[6].style.visibility = "hidden";
    //
    //     }
    // });

    let textContact = document.querySelector(".contact");
    setInterval(() => {
        if (textContact.children[1].style.visibility === "visible") {
            textContact.children[1].style.visibility = "hidden";
        } else {
            textContact.children[1].style.visibility = "visible";
            textContact.children[1].style.color = "darkorange";
            textContact.children[1].style.fontStyle = "bold";
        }

    }, 1000);
    clearInterval();

});