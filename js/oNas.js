import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "../js/slider_manager";
import "../js/main";
import "../normalize.css";

const Header = () => {
    return (
        <header className="page-header">
            <div className="main-header">
                <div className="page-logo">
                    <a href="../index.html" style={{height: "0px"}}>
                        <img className="box_image" src={"images/mdprojects_logo.png"} alt="Logo"/>
                    </a>
                </div>
                <div className="slider">
                    <div className="slider_left">
                        <img className="box_image_slider visible" src={"images/intelligence.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/coding.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/development_1.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/cooperation.jpg"} alt="Slider"/>
                        <p className="sliderText_left">aaaaaaaa</p>
                        <p className="sliderText_left">bbbbbbbb</p>
                        <p className="sliderText_left">cccccccc</p>
                        <p className="sliderText_left">dddddddd</p>
                    </div>
                    <div className="slider_right">
                        <img className="box_image_slider visible" src={"images/coding.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/development_1.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/cooperation.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/intelligence.jpg"} alt="Slider"/>
                        <p className="sliderText_left">bbbbbbbb</p>
                        <p className="sliderText_left">cccccccc</p>
                        <p className="sliderText_left">dddddddd</p>
                        <p className="sliderText_left">aaaaaaaa</p>
                    </div>
                </div>

                <div className="contact">
                    <p className="text_contact">Sprawdź Nas, zadzwoń!</p>
                    <p className="text_contact">+48 518 836 336</p>
                    <p className="text_contact">Poniedziałek - Piątek <br />9:00 - 18:00</p>
                </div>

            </div>

            <nav className="page-nav">
                <div className="burger">
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                </div>
                <ul className="classItem">
                    <li className="classLink">
                        <a href="/oNas.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>O Nas</a>
                    </li>
                    <li className="classLink">
                        <a href="index_main.html" className="classLinkHref" id="keyPageWord"
                           target="_parent">Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="../cennik.html" className="classLinkHref" target="_parent">Cennik</a>
                    </li>
                    <li className="classLink">
                        <a href="kontakt.html" className="classLinkHref" target="_parent">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

const MainONas = () => {
    return (
        <div className="mainONas">
            <article className="info_ONas">
                <h2 className="h2Text" style={{margin:"10px 0px"}}>Lorem ipsum dolor sit amet.</h2>
                <img className="box_image_ONas" src="images/people.jpg" alt="Slider"/>
                    <p className="pClassONas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi
                        consectetur, dignissimos eius et facere iste modi natus officia provident quas quos sed sint.
                        Aperiam necessitatibus nulla repudiandae unde vitae voluptates. A aliquam amet aperiam at
                        consequatur culpa, cum cumque debitis dicta dignissimos doloribus eaque exercitationem fuga iure
                        laudantium maiores minus molestias nam nobis non nostrum numquam pariatur porro quae quaerat
                        quidem quod quos recusandae reprehenderit repudiandae sed similique sunt totam unde velit
                        voluptas voluptates! Alias explicabo hic placeat quisquam quod vel voluptas. Illum maiores
                        mollitia possimus quo sint. Aperiam asperiores, distinctio doloremque eius eligendi error minus
                        quibusdam similique voluptatibus!</p>
            </article>
        </div>
    )
};
const Footer = () => {
    return (
        <>
            <div className="page-link-social">
                <h3 className="h3TextRight">Chcesz zdobyć nowe umiejętności? Skorzystaj z
                    wyjątkowych ofert kursów i rejsów żeglarskich</h3>
                <a href="https://www.e-market.edu.pl" target="_blank">
                    <div className="classAdvertising">
                        <div className="classAdvertising_left">
                            <img className="box_image_advertising visible"
                                 src={"images/sternik_motorowodny_adwords.png"} alt="Slider"/>
                            <img className="box_image_advertising" src={"images/family_wynik_adwords.png"}
                                 alt="Slider"/>
                            <img className="box_image_advertising"
                                 src={"images/żeglarz_jachtowy_adwords.png"} alt="Slider"/>
                            <img className="box_image_advertising"
                                 src={"images/obozy_wodne_adwords.png"} alt="Slider"/>
                            <p className="advertisingText"></p>
                            <p className="advertisingText"></p>
                            <p className="advertisingText"></p>
                            <p className="advertisingText"></p>
                        </div>
                        <div className="classAdvertising_right">
                            <img className="box_image_advertising visible" src={"images/family_wynik_adwords.png"}
                                 alt="Slider"/>
                            <img className="box_image_advertising" src={"images/żeglarz_jachtowy_adwords.png"}
                                 alt="Slider"/>
                            <img className="box_image_advertising" src={"images/obozy_wodne_adwords.png"}
                                 alt="Slider"/>
                            <img className="box_image_advertising"
                                 src={"images/sternik_motorowodny_adwords.png"} alt="Slider"/>
                            <p className="advertisingText"></p>
                            <p className="advertisingText"></p>
                            <p className="advertisingText"></p>
                            <p className="advertisingText"></p>
                        </div>
                    </div>
                </a>
                <div className="classSocialLink">
                    <a href="http://www.facebook.com">
                        <div className="classSocialLinkFacebook"></div>
                    </a>
                    <a href="http://www.youtube.com">
                        <div className="classSocialLinkYouTube"></div>
                    </a>
                    <a href="http://www.instagram.com">
                        <div className="classSocialLinkInstagram"></div>
                    </a>
                    <a href="http://www.twitter.com">
                        <div className="classSocialLinkYouTwitter"></div>
                    </a>
                </div>
            </div>
            <div className="footer_summary">
                <div className="classLogoFooter">Copyright ©2019 MD Projects. Wszelkie prawa zastrzeżone</div>
                <div className="classLogoFooter">Logo generated by <a
                    href="https://www.designevo.com/logo-maker/" title="Free Online Logo Maker">DesignEvo
                    free logo designer</a></div>
            </div>

        </>

    )
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        imienazwisko: "",
        adresEmail: "",
        temat:"",
        message:"",
    });
    const [validation, setValidation] = useState([]);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let correct = true;
        let error = [];
        if(formData.imienazwisko.length < 2) {
            correct = false;
            error.push("Pole Imię i Nazwisko musi zawierać co najmniej 2 znaki")
        }
        if((formData.adresEmail.length < 3) && !(formData.adresEmail.includes("@"))) {
            correct = false;
            error.push("Pole e-mail musi zawierać znak @ i co najmniej 3 znaki")
        }
        if(formData.temat.length < 2) {
            correct = false;
            error.push("Pole Temat musi zawierać co najmniej 2 znaki")
        }
        if(formData.message==="") {
            correct = false;
            error.push("Pole Tekst wiadomości musi zostać uzupełnione")
        }
        if(!correct) {
            setValidation(error);

        }
        else {
            MyForm.submit();
            alert("Dziękujemy!!!!Twój e-mail został wysłany.");

        }

    };
    return (
        <form name="MyForm" action="https://formspree.io/xzbgalwz" onSubmit={handleSubmit} method="POST" className="message-footer">
            <h3 className="h3TextLeft">Masz pytania, napisz do Nas lub zadzwoń pod numer kontaktowy +48 518
                836 336.</h3>
            <input type="text" name="imienazwisko" className="classImieNazwisko"
                   placeholder="Imię i Nazwisko*" value={formData.imienazwisko} onChange={handleChange}/>
            <input type="email" name="adresEmail" className="classEmail" placeholder="E-mail*" value={formData.adresEmail} onChange={handleChange}/>
            <input type="text" name="temat" className="classTitle" placeholder="Temat" value={formData.temat} onChange={handleChange}/>
            <textarea rows="8" name="message" className="classMessage" placeholder="Tekst wiadomości" value={formData.message} onChange={handleChange}/>
            <button className="classBtn_footer" type="submit">Wyślij</button>
            <ul className="classErrorMessage" style={{textDecoration:"none"}} >
                {
                    validation.map((e,i) => {
                        return <li key={i} style={{visibility:"visible", listStyle:"none"}}>{e}</li>
                    })
                }
            </ul>
        </form>
    )
};
function App() {
    return (
        <>
            <div className="container">
                <Header />
                <MainONas />

                <footer className="page-footer">
                    <ContactForm />
                    <Footer />
                </footer>
            </div>
        </>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
);
export {
    App,
    ContactForm
};