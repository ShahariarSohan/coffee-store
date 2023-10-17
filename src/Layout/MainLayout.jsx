import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center font-bold my-5">Coffee Store</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
