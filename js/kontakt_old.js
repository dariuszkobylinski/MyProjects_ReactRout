document.addEventListener("DOMContentLoaded", () => {

    let contactBox=document.querySelectorAll(".pClassContactDetail");
    console.log(contactBox);
    contactBox[0].style.fontSize="26px";
    contactBox[3].style.fontSize="26px";
    contactBox[4].style.fontSize="26px";
    // contactBox[5].style.fontSize="26px";
    contactBox[7].style.fontSize="26px";
    if (window.innerWidth<"460") {
        contactBox[7].style.fontSize="20px";
    }
    window.addEventListener("resize", ()=> {
        if(window.innerWidth<"460") {
            contactBox[7].style.fontSize="20px";
        }
        else
        {
            contactBox[7].style.fontSize="26px";
        }

    } );

});