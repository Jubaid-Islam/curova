import logo from '../assets/logo.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-300'>

            <div className='py-10 flex flex-col md:flex-row justify-between md:max-w-10/12 md:mx-auto '>

                <div className='mb-6 md:mb-0 text-center md:text-left '>
                    <img className='py-2 mx-auto md:mx-0'
                        src={logo} alt="Curova" />

                    <p className='font-semibold '>Curova Medical</p>

                    <p>Providing reliable treatment since 1992</p>
                </div>


                <div className='text-center md:text-left'>
                    <h1 className='py-5 font-bold text-2xl'>Social</h1>

                    <div className='flex justify-center md:justify-start gap-5'>

                        <a href="https://www.facebook.com/jubaid.islam.3597" target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-600 p-3 rounded-3xl bg-blue-500">
                            <FaFacebookF className='text-white text-2xl' />
                        </a>

                        <a href="https://www.linkedin.com/in/jubaid-islam-522b61283" target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-500 p-3 rounded-3xl bg-blue-500">
                            <FaLinkedinIn className='text-white text-2xl' />
                        </a>

                        <a href="https://www.instagram.com/jubaidd_?igsh=MXQweGxsb3l2ZjZjdw==" target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-500 p-3 rounded-3xl bg-gradient-to-b from-purple-600 to-pink-600">
                            <FaInstagram className='text-2xl text-white' />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
