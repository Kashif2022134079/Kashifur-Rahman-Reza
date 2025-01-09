import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
    return (
        <div>
            <div className="md:hidden">
                <div className="divider"></div>
                <h2 className="text-2xl font-medium text-center mb-4">Familiar Tech:</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 md:p-3">
                <div className="border place-items-center p-3 shadow rounded-lg  hover:bg-yellow-400 hover:scale-105 duration-500">
                    <div className="">
                        <IoLogoJavascript className=" font-bold text-4xl md:text-5xl" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-gray-700">Javascript</h2>
                    </div>
                </div>
                <div className="border place-items-center p-3 shadow rounded-lg  hover:shadow-lg hover:scale-105 duration-500">
                    <div className="">
                        <FaReact className="font-bold text-blue-400 hover:text-blue-500 duration-300 text-4xl md:text-5xl"></FaReact>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold  text-gray-700">React.js</h2>
                    </div>
                </div>
                <div className="border place-items-center p-3 shadow rounded-lg hover:bg-green-300 hover:scale-105 duration-500">
                    <div className="">
                        <FaNodeJs className="text-green-500 hover:text-green-800 duration-300 font-bold text-4xl md:text-5xl" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold  text-gray-700">Node.js</h2>
                    </div>
                </div>
                <div className="border place-items-center p-3 shadow rounded-lg hover:bg-slate-300 hover:scale-105 duration-500">
                    <div className="">
                        <SiMongodb className="text-green-500 hover:text-green-800 duration-300 font-bold text-4xl md:text-5xl" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold  text-gray-700">MongoDB</h2>
                    </div>
                </div>
                <div className="border place-items-center p-3 shadow rounded-lg hover:bg-gray-100 hover:scale-105 duration-500">
                    <div className="">
                        <SiExpress className="font-bold text-4xl md:text-5xl" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold  text-gray-700">Express.js</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;