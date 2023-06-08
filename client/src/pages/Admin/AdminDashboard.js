import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-4 ">
            <div className="card w-75 py-5 px-3 border">
              <h3 className="border"> Admin Name : {auth?.user?.name}</h3>
              <h3 className="border"> Admin Email : {auth?.user?.email}</h3>
              <h3 className="border"> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
