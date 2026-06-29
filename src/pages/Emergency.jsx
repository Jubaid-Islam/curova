import React from 'react';

import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Emergency = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {

        fetch("/doctor.json")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    return (
        <div className="px-4 py-25 bg-gray-50 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Emergency Doctors Contact
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:shadow-sky-100 transition"
                    >
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-24 h-24 object-cover rounded-full border-4 border-blue-200"
                        />
                        <h3 className="mt-3 text-lg font-semibold text-gray-800">
                            {doctor.name}
                        </h3>
                        <p className="text-sm text-gray-500">{doctor.passion}</p>
                        <p className="text-sm text-gray-500">{doctor.education}</p>
                        <p className="text-sky-600 font-bold mt-2">{doctor.mobile}</p>

                        <a
                            href={`tel:${doctor.mobile}`}
                            className="mt-3 flex items-center gap-2 bg-gradient-to-r from-sky-400 to-sky-700 hover:from-sky-700 hover:to-sky-400 
                    transition duration-300 ease-in-out text-white px-4 py-2 rounded-lg "
                        >
                            <FaPhoneAlt /> Call Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Emergency;




