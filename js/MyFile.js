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
                        <a href="../O_Nas.html" className="classLinkHref" target="_parent">O Nas</a>
                    </li>
                    <li className="classLink">
                        <a href="../index.html" className="classLinkHref" id="keyPageWord"
                           target="_parent">Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="../cennik.html" className="classLinkHref" target="_parent">Cennik</a>
                    </li>
                    <li className="classLink">
                        <a href="../Dane_firmy.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
};

class Footer extends React.Component {
// const Footer = () => {

    constructor() {
    super();
    this.state = {
        fontSize: "26",
        z:"0"
    };
    }

    componentDidMount() {
        const myChange = () => {
        if (parseInt(window.innerWidth)<="370") {
            console.log(window.innerWidth);
            this.setState({
                    z:"-9"
                }
            )
        }
        else {
            if((parseInt(window.innerWidth)<"460") && (parseInt(window.innerWidth)>"370")) {
                console.log(window.innerWidth);
                this.setState({
                        z:"-6"
                    }
                )
            }
            else {
                console.log(window.innerWidth);
                this.setState(
                    {
                        z:"0"
                    }
                )
            }

        }
    };
        const myResize = () => {
        window.addEventListener("resize", myChange);
        window.addEventListener("load",myChange);

    };
        myResize();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update zrobiony");
        console.log(this.state.z, this.state.fontSize);
    }

    render() {
    return (
        <>
                <div  className="classContact">
                    <div className="classContactDetail">
                        <p className="pClassContactDetail" style={{fontSize:this.state.fontSize+"px"}}>MD Investments Monika Kobylińska</p>
                        <p className="pClassContactDetail">ul. M. Drzymały 18</p>
                        <p className="pClassContactDetail">02-495 Warszawa</p>
                        <p className="pClassContactDetail" style={{fontSize:this.state.fontSize+"px"}}>NIP: 849 111 11 11</p>
                        <p className="pClassContactDetail" style={{fontSize:this.state.fontSize+"px"}}>Telefon kontaktowy: <br></br>+48 518 836 336</p>
                        <p className="pClassContactDetail">Poniedziałek - Piątek</p>
                        <p className="pClassContactDetail">9:00 - 18:00</p>
                        <p className="pClassContactDetail" style={{fontSize:parseInt(this.state.fontSize)+parseInt(this.state.z)+"px"}}>email: mdinvestments2018@gmail.com</p>
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
}
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
            error.push("Pole Email musi zawierać znak @ i co najmniej 3 znaki")
        }
        if(formData.temat.length < 2) {
            correct = false;
            error.push("Pole Temat musi zawierać co najmniej 2 znaki")
        }
        if(formData.message==="") {
            correct = false;
            error.push("Pole wiadomość musi zostać uzupełnione")
        }
        if(!correct) {
            setValidation(error);

        }
        else {
            MyForm.submit();
            alert("działa");

        }

    };
    return (
        <form name="MyForm" action="https://formspree.io/xzbgalwz" onSubmit={handleSubmit} method="POST" className="message-footer">
                <h3 className="h3TextLeft">Masz pytania, napisz do Nas lub zadzwoń pod numer kontaktowy +48 518
                    836 336.</h3>
                <input type="text" name="imienazwisko" className="classImieNazwisko"
                       placeholder="Imię i Nazwisko*" value={formData.imienazwisko} onChange={handleChange}/>
                <input type="email" name="adresEmail" className="classEmail" placeholder="E-mail*" value={formData.adresEmail} onChange={handleChange}/>
                <input type="text" name="temat" className="classTitle" placeholder="Tytuł" value={formData.temat} onChange={handleChange}/>
                <textarea rows="8" name="message" className="classMessage" placeholder="Tekst wiadomości" value={formData.message} onChange={handleChange}/>
                <button className="classBtn_footer" type="submit">Wyślij</button>
            <ul className="classErrorMessage">
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




