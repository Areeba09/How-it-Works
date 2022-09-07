import { FiMail, FiPhone, FiPlayCircle } from "react-icons/fi";

const Card = (props) => {
    return(
        
            <div className="flex flex-col py-6 px-10 rounded-xl bg-white-0 w-64 sm:p-5 sm:w-44 md:w-52 lg:w-64 2xl:px-12 2xl:w-72">
                <div>
                    {props?.name==="msg"?<FiMail  className="w-9 h-9 text-grey-0 stroke-1"  />:props?.name==="call"?<FiPhone  className="w-9 h-9 text-grey-0 stroke-1" />:<FiPlayCircle  className="w-9 h-9 text-grey-0 stroke-1" />}
                </div>
                    <h1 className="font-['Mulish'] font-bold text-3xl mt-5 sm:text-xl 2xl:text-3xl">{props.title}</h1>
                    <p className="mb-5 sm:text-base 2xl:text-lg">{props.description}</p>
                    <button className="bg-yellow-0 font-bold font-['Mulish'] mt-auto p-2 2xl:w-44 sm:w-28 sm:text-base">{props.button}</button>
            </div>
           
    );
}

export default Card;