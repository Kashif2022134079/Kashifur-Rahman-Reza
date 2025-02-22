import { FaGithub, FaLinkedin, FaUniversity } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
const LeftSideNav = () => {
    return (
        <div className='mb-3 md:mb-1'>
            <div className='md:p-4 flex md:block gap-4 md:gap-0 items-center'>
                <img className='rounded-full h-14 w-14 md:h-48 md:w-48 aspect-square  border-2 md:border-4 object-cover' src="https://i.ibb.co.com/CJ3y420/k.jpg" alt="" />
                <div className=''>
                    <h2 className='text-sm font-medium md:text-xl md:font-medium my-1 '>Kashifur Rahman Reza</h2>
                    <p className=''>Full Stack Developer</p>
                </div>
            </div>


            <div className='hidden md:block mt-2 md:mt-0 ml-4'>
                <ul className='font-light'>
                    <li className='flex gap-1 items-center'>
                        <FaUniversity />
                        SUST</li>
                    <li><a href="https://www.linkedin.com/in/kashif79" className='hover:underline my-2 flex gap-1 items-center'>
                        <FaLinkedin className='text-indigo-500' />
                        Linkedin</a>
                    </li>
                    <li><a href="https://github.com/Kashif2022134079" className='hover:underline mb-2 flex gap-1 items-center'>
                        <FaGithub />
                        Github</a></li>
                    <li><a href="https://docs.google.com/document/d/1_PNT6ZgRlj07oFk555sx4nz03VTisYeJNTO60bC7U3k/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer" className='hover:underline mb-2 flex gap-1 items-center'>
                        <GiNotebook />
                        Resume</a></li>
                </ul>
            </div>

        </div>
    );
};

export default LeftSideNav;