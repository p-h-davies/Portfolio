
import github from "../assets/img/25231.png"
import email from "../assets/img/584856b4e0bb315b0f7675ac.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="philippadavies603@gmail.com"><img class="footer-email"
                src={email}
                alt="Email icon" /></a>
            <a href="#projects"><img class="footer-github"
                src={github}
                alt="GitHub icon" /></a>
        </div>
    );
}