import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <>
      <div className="w-full">
        <PageTitle title="Home Page" />
        <div className="container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 mt-6 gap-4">
          <Link to="props-drilling" key={`props-drilling`}>
            <div className="shadow p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center">
              <h1 className="font-bold">Props drilling</h1>
              <h4 className="font-bold">Solve using useContext</h4>
            </div>
          </Link>

          <Link to="react-query">
            <div className="shadow p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
              <h1 className="font-bold">React Query</h1>
              <h4 className="font-bold">Api Query using React Query</h4>
            </div>
          </Link>

          <Link to="react-form">
            <div className="shadow p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center">
              <h1 className="font-bold">React Form</h1>
              <h4 className="font-bold">Working with react form</h4>
            </div>
          </Link>
        </div>
      </div>
      
    </>
  );
};
