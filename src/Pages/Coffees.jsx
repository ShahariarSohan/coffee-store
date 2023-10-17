import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";
const Coffees = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = coffees?.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="mb-10">
      <h1 className="text-2xl text-center font-bold mb-10">Coffees</h1>
      <div className="grid grid-cols-2 gap-5">
        {coffees?.map((coffee) => (
          <div
            key={coffee._id}
            className=" bg-base-200 flex gap-5  items-center mx-auto pr-10"
          >
            <div>
              <img className="" src={coffee.photo} alt="" />
            </div>
            <div className="font-semibold">
              <p>Name :{coffee.name}</p>
              <p>Chef :{coffee.chef}</p>
              <p>Taste :{coffee.taste}</p>
            </div>
            <div className="space-y-5">
              <Link>
                <button>
                  <FaRegEye className="text-2xl"></FaRegEye>
                </button>
              </Link>
              <Link to={`/coffees/${coffee._id}`}>
                <FaEdit className="text-2xl"></FaEdit>
                <button></button>
              </Link>
              <button onClick={() => handleDelete(coffee._id)}>
                <AiFillDelete className="text-2xl"></AiFillDelete>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
