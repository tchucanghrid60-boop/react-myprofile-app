
import profileImg from '../assets/portfolio.jpg'

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGoogle,
    FaXTwitter
} from 'react-icons/fa6'

import Swal from 'sweetalert2'

function MyCard() {

    const hireMe = () => {
        Swal.fire({
            title: 'Contact Me!',
            text: 'Thank you for your interest.',
            icon: 'success',
            confirmButtonColor: '#ff5b0a'
        })
    }

    return (
        <div className="profile-card">

            <h2>
                <span>P</span>ichet
            </h2>

            <div className="profile-img-wrap">
                <img
                    src={profileImg}
                    alt="Pichet Profile"
                    className="profile-img"
                />
            </div>

            <h3>STU ID: 6619410011 </h3>

            <p>Fullstack Web Developer</p>

            <div className="social-icons">

                <a href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebookF />
                </a>

                <a href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaXTwitter />
                </a>

                <a href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram />
                </a>

                <a href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>

                <a href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGoogle />
                </a>

            </div>

            <button
                className="hire-btn"
                onClick={hireMe}
            >
                HIRE ME !
            </button>

        </div>
    )
}

export default MyCard
