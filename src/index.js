
export const getAppointment = () => {
    let appointments = [];
    const savedAppointments = localStorage.getItem('appointments');

    if (savedAppointments) {
        appointments = JSON.parse(savedAppointments);
    }
    return appointments;
}


export const addAppointment = (singleDoctor) => {
    let appointments = getAppointment();
    const isExist = appointments.find( doctor => doctor.id === singleDoctor.id )
    
    if (isExist) return

    appointments.push(singleDoctor);
    localStorage.setItem('appointments', JSON.stringify(appointments))
}


export const removeAppointment = (id) => {
    let appointments = getAppointment()
    
    const remaining = appointments.filter( doctor => doctor.id !== id )
    localStorage.setItem('appointments', JSON.stringify(remaining))
    
   
}