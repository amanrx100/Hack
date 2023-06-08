import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"} className ="ng_img ">
      <div className="container-fluid  dashboard ng_img ">
        <div className="row d-flex justify-content-center mt-5  p-5">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-6 ">
            <div className="card w-75 p-5 border card">
              <h3 className="border-bottom py-2">{auth?.user?.name}</h3>
              <h3 className="border-bottom py-2">{auth?.user?.email}</h3>
              <h3 className="border-bottom py-2">{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
