import { FaReact, FaJsSquare, FaPhp } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { DiMysql, DiPostgresql } from 'react-icons/di';
import NodeJsLogo from './NodeJsLogo';
import PythonLogo from './PythonLogo';
import AwsLogo from './AwsLogo';
import VueLogo from './VueLogo';

const Habilidades = () => {
  return (
    <div className="mx-8 md:max-w-2xl lg:max-w-2xl lg:mx-auto text-center mt-8">
      <h1 className="uppercase text-3xl font-extrabold text-indigo-600">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-8 text-left mb-20">
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">NodeJs</p>
            <NodeJsLogo />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">Python</p>
            <PythonLogo />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">React</p>
            <FaReact className='w-36 h-36 hover:text-sky-400 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">JavaScript</p>
            <FaJsSquare className='w-36 h-36 hover:text-yellow-400 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">Express</p>
            <SiExpress className='w-36 h-36 hover:text-stone-500 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">AWS</p>
            <AwsLogo />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">MongoDB</p>
            <SiMongodb className='w-36 h-36 hover:text-green-700 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">MySQL</p>
            <DiMysql className='w-36 h-36 hover:text-blue-700 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">PostgreSQL</p>
            <DiPostgresql className='w-36 h-36 hover:text-blue-700 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">VueJs</p>
            <VueLogo />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">TailwindCSS</p>
            <SiTailwindcss className='w-36 h-36 hover:text-sky-400 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
        <div className='flex flex-col items-center'>
            <p className="text-center text-2xl font-extrabold mb-6">PHP</p>
            <FaPhp className='w-36 h-36 hover:text-indigo-900 opacity-20 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-125 rounded-lg hover:shadow-lg hover:p-2 hover:shadow-indigo-600' />
        </div>
      </div>
    </div>
  )
}

export default Habilidades
