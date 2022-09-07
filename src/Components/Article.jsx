import { Link } from "react-router-dom";
const Article = () => {
    return(
        <div className='article flex flex-col my-7 justify-center w-fit'>
            <h5 className='title m-0 font-["Encode sans"] text-grey2-0 font-bold text-lg'>Articles</h5>
            <ul className=" text-blue-0 text-base 2xl:text-lg">
                <li className="my-3">
                     <Link to='/EditAccount' className='underline underline-offset-4 '>How do I view / edit my profile and account details and settings?</Link>
                </li>
                <li className="my-3">
                     <a href='#' className='underline underline-offset-4'>Setting up my BusyBee account</a>
                </li>
                <li className="my-3">
                    <Link to='/AddSalesPerson' className='underline underline-offset-4'>How do I set/change my currency unit?</Link>
                </li>
                <li className="my-3">
                    <a href='#' className='underline underline-offset-4'>How do I register to use BusyBee for my Business?</a>
                </li>
            </ul>
        </div>
    );
}

export default Article;