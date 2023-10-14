import picture from "../assets/img/picture.png"

export default function AboutPage() {
    return (
        <div className="container pt-4">
            <h2 className="bio-title">Biography</h2>
            <section class="biography">
                <img className="bio-pic" src={picture} alt="picture of Philippa Davies" />
                <p className="bio-text">My name is Philippa Davies and I'm a web developer, based in Melbourne, Australia. <br></br>
                    <br></br>I have a background in SEO & web analytics (currently working as the Optimisation Specialist at <br></br>
                    The University of Melbourne) which allows me to approach software development with a <br></br>
                    comprehensive perspective on user functionality, marketing and end site goals.
                </p>
            </section>
            <div>
                <h2 className="bio-title">Skill Highlights</h2>
            </div>
            <section className="features-icons text-center">
                <div className="container">
                    <div className="row p-2">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-window m-auto text-primary" />
                                </div>
                                <h3 className="title">Back End Technologies</h3>
                                <ul className="lead mb-0">
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>MySQL</li>
                                    <li>NoSQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-layers m-auto text-primary" />
                                </div>
                                <h3 className="title">Front End Technologies</h3>
                                <ul className="lead mb-0">
                                    <li>CSS</li>
                                    <li>React</li>
                                    <li>TailWind</li>
                                    <li>Bootstrap</li>
                                    <li>Ant Design</li>
                                    <li>Bulma</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="bi-terminal m-auto text-primary" />
                                </div>
                                <h3 className="title">SEO <br></br>Technologies</h3>
                                <ul className="lead mb-0">
                                    <li>GA4</li>
                                    <li>GA 360</li>
                                    <li>BrightEdge</li>
                                    <li>Screaming Frog</li>
                                    <li>SiteImprove</li>
                                    <li>Moz Pro</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
