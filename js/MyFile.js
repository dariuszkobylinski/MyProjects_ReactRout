import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "../js/slider_manager";
import "../js/main";
import "../normalize.css";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" onClick={MyReload} component={Main_index}/>
                <Route path="/:service" component={ServiceInfo}/>
                <Route component={NotFound}/>
            </Switch>
        </HashRouter>
    );

}
const MyReload = ()=> {
    window.location.reload();
}

const SliderManager = () => {
    
    document.addEventListener("DOMContentLoaded", (e) => {
        e.preventDefault();
            let mySlider = document.querySelectorAll(".box_image_slider");
            let mySliderText = document.querySelectorAll(".sliderText_left");
            mySliderText[0].style.visibility="visible";
            mySliderText[4].style.visibility="visible";
            console.log(mySliderText,mySlider);
          



            // console.log(mySlider);
            // class TESTS extends React.Component {
            //     constructor() {
            //         super();
            //         this.state={
            //             visibility:"visible",
            //             counter:0
            //         }
            //     }
            //     componentDidMount() {
            //         mySliderText[0].style.visibility= "visible";
            //         mySliderText[4].style.visibility= this.state.visibility;
            //     }
            //     componentDidUpdate(prevProps, prevState, snapshot) {
            //         console.log("update");
            //         console.log(mySliderText);
            //     }
            // }




            let counter = 0;
        
             setInterval(() => {
            console.log(counter);
            console.log(mySlider);
            console.log(mySliderText);
            // window.location.reload();


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
        
        
            };
            // window.location.reload();
        }, 4000);

})};

        const Header = () => {
            // $(".classLinkHref").eq(0).css("color", "darkorange");
            
            SliderManager();
            location = self.location;
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
                                <p className="sliderText_left" style={{visibility:"visible"}}>aaaaaaaa</p>
                                <p className="sliderText_left">bbbbbbbb</p>
                                <p className="sliderText_left">cccccccc</p>
                                <p className="sliderText_left">dddddddd</p>
                            </div>
                            <div className="slider_right">
                                <img className="box_image_slider visible" src={"images/coding.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/development_1.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/cooperation.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/intelligence.jpg"} alt="Slider"/>
                                <p className="sliderText_left" style={{visibility:"visible"}}>bbbbbbbb</p>
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

                            <li className="classLink" onClick={MyReload} ><NavLink to="/O Nas" className="classLinkHref">
                                O Nas
                            </NavLink>
                            </li>
                            <li className="classLink" onClick={MyReload}><NavLink to="/" className="classLinkHref" style={{color:"darkorange"}}>
                                Oferta
                            </NavLink>
                            </li>

                            <li className="classLink" onClick={MyReload}><NavLink to="/Cennik" className="classLinkHref">
                                Cennik
                            </NavLink>
                            </li>

                            <li className="classLink"><NavLink to="/Kontakt" className="classLinkHref">
                                Kontakt
                            </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            );
        };

        const Main_index = () => {
                // window.location.href;
                return (
                    <div className="container">
                        <Header/>
                        <Main/>
                        <footer className="page-footer">
                            <ContactForm/>
                            <Footer/>
                        </footer>
                    </div>
                );
        };

        const Main = () => {
            return (
                <div className="main">
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi consectetur, dignissimos
                        eius et
                        facere iste modi natus officia provident quas quos sed sint. Aperiam necessitatibus nulla
                        repudiandae unde
                        vitae voluptates. A aliquam amet aperiam at consequatur culpa, cum cumque debitis dicta
                        dignissimos
                        doloribus eaque exercitationem fuga iure laudantium maiores minus molestias nam nobis non
                        nostrum numquam
                        pariatur porro quae quaerat quidem quod quos recusandae reprehenderit repudiandae sed similique
                        sunt totam
                        unde velit voluptas voluptates! Alias explicabo hic placeat quisquam quod vel voluptas. Illum
                        maiores
                        mollitia possimus quo sint. Aperiam asperiores, distinctio doloremque eius eligendi error minus
                        quibusdam
                        similique voluptatibus!
                    </article>
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti facere ipsum iure
                        obcaecati
                        officiis quas reiciendis sapiente! Accusamus blanditiis commodi, consectetur eos error harum
                        ipsum, maxime
                        necessitatibus, nobis possimus quasi sed voluptate voluptatem? Aspernatur aut, cumque doloremque
                        dolores
                        facere, fugiat iure non officia optio pariatur, porro quasi quibusdam quo ratione reiciendis sed
                        sunt
                        voluptatibus voluptatum. Ad aliquam autem cum cupiditate, delectus dolorem, enim fugiat id in
                        iure labore
                        laborum nostrum porro, quae quam qui quisquam repellendus repudiandae unde voluptatem. Molestiae
                        mollitia
                        repellendus sunt vitae? A aliquam aliquid architecto commodi dolor dolorem enim, illo in magni
                        nam, non
                        quae, quos!
                    </article>
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto atque
                        consequuntur cum,
                        deleniti dolorem eaque esse et eum fugiat ipsum laudantium necessitatibus neque numquam odio
                        omnis
                        perspiciatis placeat quo veniam veritatis. Ab accusamus aliquam aperiam delectus dolore dolores
                        eveniet
                        exercitationem, fugiat ipsum iste molestiae neque non officia omnis, pariatur possimus quaerat
                        quas
                        quibusdam quo quos reiciendis sit unde voluptatibus. Fugiat perferendis repudiandae unde.
                        Aliquid aperiam
                        aut beatae consectetur cum, illum libero, maiores maxime modi neque non placeat praesentium
                        quibusdam
                        recusandae repellendus reprehenderit sunt vel voluptas! Accusantium ad animi architecto cumque
                        iste itaque
                        nam odit praesentium quo rem rerum, tempora?
                    </article>
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda delectus dolor
                        doloremque expedita
                        facere id ipsum laudantium libero minima, nesciunt nisi quo repellendus sunt veritatis. Animi
                        blanditiis
                        eligendi neque perferendis recusandae sed tempora. Autem beatae blanditiis, commodi dolorum
                        facere
                        laboriosam magnam minus modi molestias nam nesciunt nihil obcaecati officiis. Consectetur
                        cupiditate error
                        illum iure iusto molestiae, molestias nemo odio optio quae quam recusandae repudiandae,
                        similique sint
                        velit! Adipisci amet aut delectus dignissimos ducimus error et eveniet illo in iste, iusto
                        maxime minima
                        modi natus numquam officia pariatur perferendis placeat quas quibusdam quos ratione
                        reprehenderit similique
                        temporibus ullam vel voluptatem.
                    </article>
                </div>
            )
        };

        function ServiceInfo(props) {
            // console.log(props);
            if (props.match.params.service==="O Nas") {
                // console.log(props);
                // console.log(window.location.href)
                // location.href="http://localhost:9999/O%20Nas/";

                // window.location.h/ref="http://localhost:9999/O%20Nas#/";
                // console.log(props.match.params);
                // console.log(window.location.href);
                // window.location.replace("http://localhost:9999/O%20Nas#/");
              // this.location.href="O Nas";
                // SliderManager();
                return  (
                    <>
                        <div className="container">
                            <Header />
                            <footer className="page-footer">
                                <ContactForm />
                                <Footer />
                            </footer>
                        </div>
                    </>
                );
            }
            else {
                if (props.match.params.service === "/") {
                    // console.log(window.location);
                    // SliderManager();
                    return (
                        <>
                        <Main_index/>
                        </>
                    )
                } else {
                    return <NotFound/>
                }
            }
        }
        function NotFound() {
            return <NavLink to="/">Powrót do strony głównej</NavLink>
        }


        class Footer extends React.Component {
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
// function App() {
//     return (
//         <>
//             <div className="container">
//                 <Header />
//
//             <footer className="page-footer">
//                 <ContactForm />
//                 <Footer />
//             </footer>
//             </div>
//         </>
//     )
// }
        ReactDOM.render(
            <App />,
            document.getElementById("app")
        );

export {
            App,
            ContactForm,
            Main_index
        };
