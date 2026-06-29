import { useEffect, useState } from "react";
import Card from "./Card";

const Content = ({ doctorsData }) => {
    const [doctors, setDoctors] = useState(doctorsData)
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        if (showAll) {
            setDoctors(doctorsData)
        } else {
            setDoctors(doctorsData.slice(0, 6))
        }
    }, [showAll, doctorsData])

    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">

            <div className='container '>
                <div>
                    <h1 className='text-center text-3xl font-bold'> Our best doctors</h1>

                    <br />

                    <p className='text-center text-gray-500'>
                        Our platform connects you with verified, experienced doctors across various specialties
                        <br />
                        all at your convenience.</p>
                </div>

                <div className='grid gap-8 mb-8 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4'>

                    {
                        doctors.map(doctor => <Card key={doctor.id} doctor={doctor}> </Card>)
                    }

                </div>

                <div className="flex justify-center" >
                    
                    <button className="px-5 py-3 rounded-3xl text-white bg-gradient-to-r from-sky-400 to-sky-700
                     hover:from-sky-700 hover:to-sky-400 transition duration-300 ease-in-out" 
                     onClick={() => {
                            setShowAll(prv => !prv)
                            if (showAll) window.scroll(0, 0)
                        }}
                    > 
                    {showAll ? "Show Less" : "Show All"}</button>

                </div>
            </div>
        </div>
    );
};

export default Content;