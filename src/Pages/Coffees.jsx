import { useLoaderData } from "react-router-dom";
import Coffee from "../Components/Coffee";

const Coffees = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-10">Coffees</h1>
      <div className="grid grid-cols-2 gap-5">
        {coffees?.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee}></Coffee>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
