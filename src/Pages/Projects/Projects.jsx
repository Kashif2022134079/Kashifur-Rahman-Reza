
const Projects = () => {
    return (
        <div className="grid md:grid-cols-3 gap-3">
            <div className="col-span-2 p-3 text-gray-600">
                <div className="mb-3">
                    <h2 className="text-2xl font-medium">Asrar Fashion</h2>
                    <p>An online full-stack e-commerce platform for a burqa-selling business.</p>
                </div>
                <div>
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
            </div>
            <div className="col-span-1 border">
                Hello
            </div>
        </div>
    );
};

export default Projects;