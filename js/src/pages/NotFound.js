import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h1>Page Not Found </h1>
            <p>go to <Link to ='/'>Home Page</Link></p>
        </div>
     );
}
 
export default NotFound;