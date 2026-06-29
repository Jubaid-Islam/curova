import { FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const admin = {
        name: "Jubaid",
        role: "Admin & Health Consultant",
        email: "jubaid2006@gmail.com",
        phone: "+8801712345678",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    };

    return (
        <section className="py-26 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
                <p className="text-gray-600 mt-4">Have questions about your health or our services? 
                    Our team is here to help.</p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

                {/*  Card */}
                <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center border border-gray-100">

                    <img
                        src={admin.image} alt={admin.name}
                        className="w-32 h-32 object-cover rounded-full border-4 border-sky-100 shadow-sm" />
                    <h3 className="mt-4 text-2xl font-bold text-gray-800">{admin.name}</h3>
                    <p className="text-sky-600 font-medium">{admin.role}</p>

                    <div className="mt-6 space-y-3 w-full">

                        <a href={`mailto:${admin.email}`} className="flex items-center gap-3 text-gray-700 hover:text-sky-700 transition">
                            <FaEnvelope className="text-xl" /> {admin.email}
                        </a>
                        <a href={`tel:${admin.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-sky-700 transition">
                            <FaPhoneAlt className="text-xl" /> {admin.phone}
                        </a>

                    </div>


                    <div className="flex gap-4 mt-6">
                        <FaFacebook className="text-2xl text-blue-600 hover:scale-110 cursor-pointer transition" />
                        <FaLinkedin className="text-2xl text-blue-700 hover:scale-110 cursor-pointer transition" />
                        <FaWhatsapp className="text-2xl text-green-500 hover:scale-110 cursor-pointer transition" />
                    </div>
                </div>


                <div className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100 ">

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Support Hours</h3>

                    <ul className="text-gray-600 space-y-3">
                        <li className="flex justify-between border-gray-300 border-b pb-2"><span>Sat - Thu:</span> <span>9:00 AM - 8:00 PM</span> </li>
                        <li className="flex justify-between border-gray-300 border-b pb-2"><span>Friday:</span> <span className="text-red-500 font-semibold">Closed</span></li>
                    </ul>


                    <div className="mt-8 bg-sky-50 p-6 rounded-2xl">
                        <h4 className="font-bold text-sky-800 mb-2">Need Urgent Care?</h4>
                        <p className="text-sm text-sky-700 mb-4">For medical emergencies, please visit the nearest hospital or contact our emergency hotline directly.</p>

                        <button className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition">Call Emergency</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;