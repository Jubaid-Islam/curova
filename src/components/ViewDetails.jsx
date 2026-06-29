import { useLoaderData, useParams, useNavigate } from "react-router";
import Swal from 'sweetalert2';
import { addAppointment } from "..";

const ViewDetails = () => {
    const navigate = useNavigate();
    const details = useLoaderData() || []
    const { id } = useParams()
    const singleDoctor = details.find((doctor) => doctor.id === parseInt(id)) || {}

    const { name, passion, image, registration_number, available_days, fee, education } = singleDoctor;

    const handleAppointment = (doctor) => {
        Swal.fire({
            title: 'Confirm Booking ?',
            text: ` Are you sure you want to book an appointment with ${doctor.name}? `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0369a1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm!'

        })
            .then((result) => {
                if (result.isConfirmed) {
                    addAppointment(doctor)

                    Swal.fire({
                        title: 'Success!',
                        text: 'Your appointment has been booked successfully.',
                        icon: 'success',
                        confirmButtonColor: '#0369a1'
                    })
                        .then(() => {
                            navigate('/bookings');
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        })

                } else {
                    Swal.fire({
                        title: 'Cancelled',
                        text: 'Your booking has been cancelled.',
                        icon: 'info',
                        confirmButtonColor: '#6b7280'
                    });
                }
            });
    };

    if (!singleDoctor.id)
        return <div className="p-10 text-center">Doctor not found.</div>

    return (
        <div className="max-w-7xl mx-auto py-26 px-4">

            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Doctor's Profile Details</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Professional profile and consultation details for {name}.
                </p>
            </div>

            {/* Profile */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">

                <div className="w-full md:w-2/5">
                    <img
                        className="w-full aspect-[4/5] object-cover rounded-2xl shadow-md"
                        src={image} alt={name} />
                </div>

                <div className="flex-1 flex flex-col justify-center gap-4">

                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h3 className="text-sky-700 font-medium text-lg">{passion}</h3>
                    <p className="text-gray-700 font-semibold">{education}</p>

                    <div className="flex flex-wrap gap-2 py-2">

                        <span className="font-semibold self-center mr-2">Availability:</span>

                        {
                            available_days?.map((day, i) => (
                                <span className="px-4 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium" key={i}>
                                    {day}
                                </span>
                            ))}
                    </div>


                    <div className="mt-4 border-t border-gray-300 pt-4">
                        <h4 className="font-bold text-lg">
                            Consultation Fee: <span className="text-sky-700">{fee} Taka</span>
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">Reg No: {registration_number}</p>
                    </div>

                </div>
            </div>


            {/* Booking  */}
            <div className="mt-8 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 text-center">

                <h2 className="text-2xl font-bold mb-6">Book an appointment</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="flex items-center gap-3">

                        <span className="font-semibold">Status:</span>

                        {
                            available_days?.includes(new Date().toLocaleDateString("en-US", { weekday: "long" })) ? (
                                <span className="px-4 py-2 text-green-700 bg-green-100 rounded-lg font-bold">Available Today</span>
                            ) : (
                                <span className="px-4 py-2 text-red-700 bg-red-100 rounded-lg font-bold">Not Available Today</span>
                            )
                        }
                    </div>

                    <button
                        onClick={() => handleAppointment(singleDoctor)}
                        className="px-8 py-3 rounded-2xl text-white font-bold bg-gradient-to-r from-sky-400 to-sky-700 hover:shadow-lg transition-all">
                        Book Appointment Now
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ViewDetails;