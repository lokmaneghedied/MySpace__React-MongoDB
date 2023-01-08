import LogIn from "../components/LogIn";

const Home = () => {
    return ( 
        <div className="bg-blue-100 h-screen flex justify-around items-center">
            <div className="font-serif">
                <h1 className="text-blue-500 text-6xl font-medium">MySpace</h1>
                <p className="text-2xl pt-3">Take this opportunity to express ....</p>
            </div>
            <LogIn />
        </div>
     );
}
 
export default Home;