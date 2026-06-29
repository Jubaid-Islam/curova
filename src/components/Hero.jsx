import bannerImg from '../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div className="px-4 py-20 max-w-7xl mx-auto rounded-3xl">

            <div className="space-y-4 max-w-3xl mx-auto px-4">

                <h1 className="text-3xl mt-5 md:text-5xl font-bold text-center leading-tight">
                    Dependable Care, Backed by Trusted Professionals.
                </h1>

                <p className="text-center text-gray-600 text-sm md:text-base px-2">
                    Our platform connects you with verified, experienced doctors across various specialties
                    all at your convenience.
                </p>
            </div>


            <form className="py-8 px-4 flex flex-col md:flex-row justify-center items-center gap-3 max-w-xl mx-auto">
                <input
                    type="text"
                    placeholder="Search any doctors"
                    className="w-full h-12 px-4 bg-white rounded-2xl shadow-sm focus:outline-none border border-gray-200" />

                <button
                    type="submit"
                    className="w-full md:w-32 h-12 text-white font-medium rounded-2xl bg-gradient-to-r from-sky-400 to-sky-700
                         hover:from-sky-700 hover:to-sky-400 transition duration-300 ease-in-out ">
                    Search
                </button>
            </form>


            <div className="flex flex-col md:flex-row justify-center items-center gap-6  mt-6">
                <img src={bannerImg} alt="doctor"
                    className="w-full md:w-1/3 rounded-xl shadow-md object-cover" />

                <img src={bannerImg} alt="doctor"
                    className="w-full md:w-1/3 rounded-xl shadow-md object-cover " />
            </div>

        </div>

    )
}

export default Hero