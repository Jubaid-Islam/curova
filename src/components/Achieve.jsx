import doctor from '../assets/success-doctor.png'
import reviews from '../assets/success-review.png'
import patients from '../assets/success-patients.png'
import staffs from '../assets/success-staffs.png'
import CountUp from './CountUp';

const Achieve = () => {
    return (
        <div>
            <div className='bg-gray-50  max-w-7xl mx-auto px-4 py-6'>
                <div className="text-center">

                    <h1 className=" text-3xl font-bold"> We provide best Medical servives</h1>
                    <br />

                    <p className="py-4"> Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">

                    <div className="p-4 w-full max-w-xs">
                        <div className="bg-white rounded-2xl h-full flex flex-col items-center justify-center text-center p-6 shadow">
                            <img src={doctor} alt=""
                                className="w-20 h-20 object-contain mb-4" />

                            <h3 className="py-4 text-4xl font-bold">
                                <CountUp end={200} />
                            </h3>

                            <p className="font-semibold text-2xl">Total Doctors</p>

                        </div>
                    </div>


                    <div className="p-4 w-full max-w-xs">
                        <div className="bg-white rounded-2xl h-full flex flex-col items-center justify-center text-center p-6 shadow">

                            <img src={reviews} alt=""
                                className="w-20 h-20 object-contain mb-4" />

                            <h3 className="py-4 text-4xl font-bold">
                                <CountUp end={500} />
                            </h3>

                            <p className="font-semibold text-2xl">Total Reviews</p>

                        </div>
                    </div>


                    <div className="p-4 w-full max-w-xs">
                        <div className="bg-white rounded-2xl h-full flex flex-col items-center justify-center text-center p-6 shadow">

                            <img src={patients} alt=""
                                className="w-20 h-20 object-contain mb-4" />

                            <h3 className="py-4 text-4xl font-bold">
                                <CountUp end={1200} />
                            </h3>

                            <p className="font-semibold text-2xl">Total Patients</p>

                        </div>
                    </div>


                    <div className="p-4 w-full max-w-xs">

                        <div className="bg-white rounded-2xl h-full flex flex-col items-center justify-center text-center p-6 shadow">
                            <img src={staffs} alt=""
                                className="w-20 h-20 object-contain mb-4" />

                            <h3 className="py-4 text-4xl font-bold">
                                <CountUp end={300} />
                            </h3>

                            <p className="font-semibold text-2xl">Total Stuffs</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achieve;
