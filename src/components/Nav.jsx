import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <Navbar
            links={[
                <Link key={1} to="/">
                    Home
                </Link>,
                <Link key={2} to="/about">
                    About Me
                </Link>,
                <Link key={2} to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={2} to="/resume">
                    Resume
                </Link>,
                <Link key={2} to="/contact">
                    Contact
                </Link>,
            ]}
        />
    );
}
