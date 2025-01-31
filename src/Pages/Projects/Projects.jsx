
const Projects = () => {
    return (
        <div className="grid md:grid-cols-3 gap-3">
            <div className="col-span-2 p-3 text-gray-600">
                <div className="mb-3">
                    <h2 className="text-2xl font-medium">Asrar Fashion</h2>
                    <p>An online full-stack e-commerce platform for a burqa-selling business.</p>
                </div>
                <div className="">
                    <p>
                        Asrar Fashion allows customers to browse burqas, view detailed product information, add items to their cart, and place orders. The website features a responsive design, secure user authentication, and an admin panel for managing products and orders.
                    </p>
                </div>
                <div className="my-3">
                    <h2><span className="text-xl font-medium">Technologies</span>: React.js, Tailwind CSS, Node.js, Express.js, MongoDB.</h2>
                </div>
                <div>
                    <h2 className="text-xl font-medium">Key Features:</h2>
                    <div className="ml-6">
                        <ol className="list-disc">
                            <li>Product listing and detailed view</li>
                            <li>Shopping cart and order placement</li>
                            <li>Responsive design</li>
                            <li>Admin panel for product and order management</li>
                        </ol>
                    </div>
                </div>
                <div className="my-4">
                    <div className="divider"></div>
                    <button className="btn btn-outline"><a href="https://burqa-shop.web.app/">Site Link</a></button>
                </div>
            </div>
            {/* <div className="col-span-1">
                <img
                    className="w-full h-auto object-cover text-center"
                    src="https://i.ibb.co.com/LZ8HQkT/Whats-App-Image-2025-01-10-at-11-43-30-PM-1.jpg" alt="" />
            </div> */}


            <div className="col-span-3 md:col-span-1 order-1 md:order-2">
                <div className="relative h-[300px] md:h-full w-full">
                    <img
                        src="https://i.ibb.co.com/LZ8HQkT/Whats-App-Image-2025-01-10-at-11-43-30-PM-1.jpg"
                        alt="Asrar Fashion website screenshot"
                        className="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-r-lg"
                    />
                </div>
            </div>

        </div>
    );
};

export default Projects;