import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { getAppointment, removeAppointment } from "..";
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

const Bookings = () => {
    const [displayAppointment, setDisplayAppointment] = useState([])

    useEffect(() => {
        const appointments = getAppointment()
        setDisplayAppointment(appointments)
    }, []);

    const handleRemoveAppointment = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, cancel it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    removeAppointment(id)
                    const updatedAppointments = getAppointment()
                    setDisplayAppointment(updatedAppointments)

                    Swal.fire(
                        'Cancelled!',
                        'Your appointment has been removed.',
                        'success'
                    )
                }
            })
    }


    const chartData = displayAppointment.map((a) => ({
        name: a.name,
        fee: a.fee,
        target: a.fee + 100,
    }))

    return (
        <div className="px-4 py-26 max-w-7xl mx-auto">


            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Your Appointments</h1>
                <p className="text-gray-500 mt-2">Manage your upcoming health consultations.</p>
            </div>

            {/* Chart */}
            {displayAppointment.length > 0 && (
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-10">
                    <h2 className="text-xl font-semibold mb-6 text-center">Fee Overview</h2>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="target" barSize={30} fill="#bae6fd" name="Service Target" />
                                <Line type="monotone" dataKey="fee" stroke="#0284c7" strokeWidth={3} name="Fee (Taka)" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}


            {/* List  */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    displayAppointment.length > 0 ? (
                        displayAppointment.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">

                                <h3 className="font-bold text-lg"> {item.name} </h3>
                                <p className="text-sky-600 text-sm font-medium mb-4"> {item.passion} </p>

                                <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
                                    <p className="font-bold text-gray-700"> {item.fee} Taka </p>
                                    <button onClick={() => handleRemoveAppointment(item.id)}
                                        className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-full text-sm font-semibold transition" >
                                        Cancel
                                    </button>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-400">
                            No appointments found.
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Bookings;