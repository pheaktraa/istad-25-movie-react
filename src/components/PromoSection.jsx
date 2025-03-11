import React from "react";

const PromotionSection = () => {
    return (
        <section 
            className="relative flex flex-col justify-center items-center bg-cover bg-top bg-no-repeat px-4 py-16 md:py-24 h-[700px]" 
            style={{ backgroundImage: `url('https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/GtEAAOSw1W9eN1cY/$_57.JPG?set_id=8800005007')` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-screen-lg text-center text-white px-6">
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                    Get 50% Off For New Account!
                </h1>
                <p className="mb-6 text-lg text-white">
                    Enjoy unlimited access to ReelRush movies and exclusive content. Register today and start streaming!
                </p>
                <a href="#" 
                    className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-lg 
                    font-medium text-white transition hover:scale-[1.2]"
                >
                    Start Now
                </a>
            </div>
        </section>
    );
};

export default PromotionSection;
