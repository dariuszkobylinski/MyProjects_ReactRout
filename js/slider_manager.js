/*Slider górny*/

document.addEventListener("DOMContentLoaded", () => {
    let mySlider = document.querySelectorAll(".box_image_slider");
    let mySliderText = document.querySelectorAll(".sliderText_left");
    console.log(mySliderText);

    mySliderText[0].style.visibility = "visible";
    mySliderText[4].style.visibility = "visible";

    let counter = 0;

    setInterval(() => {
        //console.log(counter);
        if (counter <= mySlider.length / 2 - 2) {
            counter = counter + 1;
            mySlider[counter - 1].classList.toggle("visible");
            mySlider[counter].classList.toggle("visible");

            mySlider[counter + 4 - 1].classList.toggle("visible");
            mySlider[counter + 4].classList.toggle("visible");

            mySliderText[counter - 1].style.visibility = "hidden";
            mySliderText[counter].style.visibility = "visible";

            mySliderText[counter + 4 - 1].style.visibility = "hidden";
            mySliderText[counter + 4].style.visibility = "visible";

        } else {
            counter = 0;
            mySlider[mySlider.length / 2 - 1].classList.toggle("visible");
            mySlider[mySlider.length / 2 + 4 - 1].classList.toggle("visible");
            mySlider[0].classList.toggle("visible");
            mySlider[4].classList.toggle("visible");

            mySliderText[mySliderText.length / 2 - 1].style.visibility = "hidden";
            mySliderText[0].style.visibility = "visible";
            mySliderText[mySliderText.length / 2 + 4 - 1].style.visibility = "hidden";
            mySliderText[4].style.visibility = "visible";


        }
    }, 4000);

    let myAdvertising = document.querySelectorAll(".box_image_advertising");
    let myAdvertisingText = document.querySelectorAll(".advertisingText");

    myAdvertisingText[0].style.visibility = "visible";
    myAdvertisingText[4].style.visibility = "visible";

    let counter_advertising = 0;
    setInterval(() => {

        if (counter_advertising <= myAdvertising.length / 2 - 2) {
            counter_advertising = counter_advertising + 1;
            myAdvertising[counter_advertising - 1].classList.toggle("visible");
            myAdvertising[counter_advertising].classList.toggle("visible");

            myAdvertising[counter_advertising + 4 - 1].classList.toggle("visible");
            myAdvertising[counter_advertising + 4].classList.toggle("visible");

            myAdvertisingText[counter_advertising - 1].style.visibility = "hidden";
            myAdvertisingText[counter_advertising].style.visibility = "visible";

            myAdvertisingText[counter_advertising + 4 - 1].style.visibility = "hidden";
            myAdvertisingText[counter_advertising + 4].style.visibility = "visible";

        } else {
            counter_advertising = 0;
            myAdvertising[myAdvertising.length / 2 - 1].classList.toggle("visible");
            myAdvertising[myAdvertising.length / 2 + 4 - 1].classList.toggle("visible");
            myAdvertising[0].classList.toggle("visible");
            myAdvertising[4].classList.toggle("visible");

            myAdvertisingText[myAdvertisingText.length / 2 - 1].style.visibility = "hidden";
            myAdvertisingText[0].style.visibility = "visible";
            myAdvertisingText[myAdvertisingText.length / 2 + 4 - 1].style.visibility = "hidden";
            myAdvertisingText[4].style.visibility = "visible";


        }
        console.log(counter_advertising);
    }, 4000);

});