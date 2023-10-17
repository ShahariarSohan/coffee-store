import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const Coffee = ({ coffee }) => {
  const { name, chef, taste, photo } = coffee || {};

  return (
    <div className=" bg-base-200 flex gap-5  items-center mx-auto pr-10">
      <div>
        <img className="" src={photo} alt="" />
      </div>
      <div className="font-semibold">
        <p>Name :{name}</p>
        <p>Chef :{chef}</p>
        <p>Taste :{taste}</p>
      </div>
      <div className="space-y-5">
        <Link>
          <button>
            <FaRegEye className="text-2xl"></FaRegEye>
          </button>
        </Link>
        <Link>
          <FaEdit className="text-2xl"></FaEdit>
          <button></button>
        </Link>
        <button>
          <AiFillDelete className="text-2xl"></AiFillDelete>
        </button>
      </div>
    </div>
  );
};
Coffee.propTypes = {
  coffee: PropTypes.object.isRequired,
};
export default Coffee;
