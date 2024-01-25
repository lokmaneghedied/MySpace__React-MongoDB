import LogIn from "../components/LogIn";

const Home = () => {
  return (
    <div className="bg-blue-100 h-screen grid justify-items-center md:flex md:justify-around md:items-center ">
      <div className="font-serif">
        <h1 className="text-blue-500 md:text-6xl text-4xl font-medium">
          New Name
        </h1>
        <p className="md:text-2xl pt-3">Take this opportunity to express</p>
      </div>
      <LogIn />
    </div>
  );
};

export default Home;
