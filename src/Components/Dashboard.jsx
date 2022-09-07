
import { Link } from "react-router-dom";
const Dashboard = (props) => {
    const visitedStyle = {color: "#999999", textDecoration: "none"}
    const isVisited = true;
   
 
        return(
        <div className="flex flex-col h-fit p-3 bg-white-0 sm:hidden md:block">
            <h5 className="font-bold font-['Encode sans'] text-grey2-0 text-xl m-0 2xl:text-2xl">{props.title}</h5>
            <ul className="text-base font-['Mulish'] underline underline-offset-4 flex flex-col 2xl:text-lg">
                {props.links.map((id) => {
                  return(
                    <li className="my-2">
                        <Link className="text-blue-0" to= {id.link} style={isVisited && visitedStyle}>{id.text}</Link>

                    </li>
                  )  
                })}
            </ul>
        </div>
    );
}
export default Dashboard;