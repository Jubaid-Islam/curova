import React from 'react';


const blogPosts = [
    {
        id: 1,
        title: "10 Tips for Maintaining Heart Health",
        category: "Cardiology",
        date: "June 29, 2026",
        excerpt:
            "Discover simple daily habits that can significantly improve your heart health and longevity.",
        image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        title: "Understanding Mental Wellness",
        category: "Mental Health",
        date: "June 27, 2026",
        excerpt:
            "Why prioritizing your mental state is just as important as your physical health.",
        image:
            "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Nutrition Guide for Beginners",
        category: "Nutrition",
        date: "June 25, 2026",
        excerpt:
            "A simple guide to balanced eating habits that boost your energy and immunity.",
        image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        title: "Managing Blood Pressure Naturally",
        category: "Cardiology",
        date: "June 23, 2026",
        excerpt:
            "Learn practical lifestyle changes that support healthy blood pressure levels.",
        image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        title: "Sleep and Mental Recovery",
        category: "Mental Health",
        date: "June 21, 2026",
        excerpt:
            "Quality sleep plays a major role in emotional balance and cognitive performance.",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 6,
        title: "Healthy Eating Habits",
        category: "Nutrition",
        date: "June 19, 2026",
        excerpt:
            "Small dietary changes can have a significant impact on your long-term health.",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    },
];
const BlogPage = () => {

    return (
        <section className=" py-26 px-4 md:px-8">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">

                    <h2 className="text-4xl font-bold text-gray-900">Curova Health Insights</h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Stay informed with the latest health tips, medical breakthroughs, and wellness advice from our expert professionals.
                    </p>

                </div>

                {/* Blog  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        blogPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-3xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-gray-100">

                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

                                <div className="p-6">

                                    <span className="text-sky-600 text-xs font-bold uppercase tracking-wider"> {post.category} </span>
                                    <h3 className="text-xl font-bold mt-2 text-gray-800"> {post.title} </h3>
                                    <p className="text-gray-500 text-sm mt-3"> {post.excerpt} </p>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-xs text-gray-400"> {post.date} </span>
                                        <button className="text-sky-700 font-semibold text-sm hover:underline">Read More </button>
                                    </div>

                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;