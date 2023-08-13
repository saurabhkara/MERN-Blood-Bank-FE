import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/layout/Layout";
import Modal from "../components/shared/layout/modal/Modal";
import API from "../services/API";
import moment from "moment";

function Home() {
  const { loading, error } = useSelector((d) => d.auth);
  const [data, setData] = useState([]);

  const getInventoryData = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        console.log(data?.records);
        setData(data?.records);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInventoryData();
  }, []);

  return (
    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4
            className="ms-4"
            data-bs-target="#staticBackdrop"
            data-bs-toggle="modal"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-plus text-success py-4"></i>
            Add Inventory
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Qunatity</th>
                <th scope="col">Donor Email</th>
                <th scope="col">Data and Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.bloodGroup}</td>
                    <td>{item.inventoryType}</td>
                    <td>{item.quantity}</td>
                    <td>{item.donorEmail}</td>
                    <td>
                      {moment(item.createdAt).format("DD-MM-YYYY hh:mm A")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Modal />
        </>
      )}
    </Layout>
  );
}

export default Home;
