import { Link } from "react-router";


const Card = ({ doctor }) => {
    const { id, name, image, passion, registration_number } = doctor || {};

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">

            <img src={image} alt={name}
                className="w-full h-60 md:h-72 object-cover" />

            <div className="p-6 flex flex-col gap-4">

                <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 text-xs md:text-sm px-3 py-1 rounded-full">
                        Available
                    </span>

                    <span className="bg-sky-100 text-blue-500 text-xs md:text-sm px-3 py-1 rounded-full">
                        5+ years Experience
                    </span>
                </div>

                <div>

                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">  {name} </h1>
                    <p className="text-gray-600 text-sm md:text-base mt-1"> {passion} </p>
                    <p className="text-green-700 font-medium text-sm md:text-base mt-2">Reg: {registration_number} </p>

                </div>

                <Link to={`/viewdetails/${id}`}>
                    <button
                        onClick={handleClick}
                        className="text-center mt-auto h-10 w-full rounded-xl text-white font-medium bg-gradient-to-r from-sky-400 to-sky-700 
                        hover:from-sky-700 hover:to-sky-400 transition duration-300 ease-in-out ">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Card;
