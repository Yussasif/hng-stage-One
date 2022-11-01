import ZuriLogo from './Zuri.Internship_Logo.png'
import I4G from './I4G.png'
const footer = () => {
    
    return ( 
        <div className="mx-3 md:my-6 md:mx-10">
            <div className="my-6">
                <hr />
            </div>
             <div className="flex justify-center items-center  md:justify-between flex-col md:flex-row">
                 <img src={ZuriLogo} alt="Zuri INternship Logo" className="w-36 md:w-24 h-auto my-3 md:my-0" />
                 <p className="text-gray-500 text-base my-3 md:my-0">HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="I4G Logo" className="w-36 md:w-24 h-auto my-3 md:my-0" />
             </div>
        </div>
     );
}
 
export default footer;