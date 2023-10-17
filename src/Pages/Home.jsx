const Home = () => {
  return (
    <div className="bg-base-200 mb-10">
      <h1 className="text-2xl text-center font-bold">Add New Coffee</h1>
      <div className="w-3/4 mx-auto flex gap-5 pb-5">
        {/* row 1 */}
        <div className="w-1/2">
          <label className="label">
            <span className="text-xl">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
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
          className=" input rounded-sm w-full"
        />
      </div>
      <div className="w-3/4 mx-auto pb-5">
        <button className="text-center text-white bg-gray-500 font-bold w-full py-2 rounded-sm ">
          Add coffee{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
