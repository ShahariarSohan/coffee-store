import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
  console.log(loadedCoffee);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:4000/coffees/${loadedCoffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Coffee updated successfully");
        }
      });
  };
  return (
    <div className="bg-base-200 mb-10 p-5">
      <h1 className="text-2xl text-center font-bold">Add New Coffee</h1>
      <form onSubmit={handleUpdate}>
        <div className="w-3/4 mx-auto flex gap-5 pb-5">
          {/* row 1 */}
          <div className="w-1/2">
            <label className="label">
              <span className="text-xl">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={loadedCoffee.name}
              className=" input rounded-sm w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="text-xl">Chef</span>
            </label>
            <input
              type="text"
              placeholder="Chef"
              name="chef"
              defaultValue={loadedCoffee.chef}
              className=" input rounded-sm w-full"
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto flex gap-5 pb-5">
          {/* row 2 */}
          <div className="w-1/2">
            <label className="label">
              <span className="text-xl">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Supplier"
              name="supplier"
              defaultValue={loadedCoffee.supplier}
              className=" input rounded-sm w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="text-xl">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              defaultValue={loadedCoffee.taste}
              className=" input rounded-sm w-full"
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto flex gap-5 pb-5">
          {/* row 3*/}
          <div className="w-1/2">
            <label className="label">
              <span className="text-xl">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              defaultValue={loadedCoffee.category}
              className=" input rounded-sm w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="text-xl">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              name="details"
              defaultValue={loadedCoffee.details}
              className=" input rounded-sm w-full"
            />
          </div>
        </div>
        {/* row 4*/}
        <div className="w-3/4 mx-auto pb-5">
          <label className="label">
            <span className="text-xl">Photo</span>
          </label>
          <input
            type="text"
            placeholder="Photo"
            name="photo"
            defaultValue={loadedCoffee.photo}
            className=" input rounded-sm w-full"
          />
        </div>
        <div className="w-3/4 mx-auto pb-5">
          <input
            className="text-center text-white bg-gray-500 font-bold w-full py-2 rounded-sm "
            type="submit"
            value="Update coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
