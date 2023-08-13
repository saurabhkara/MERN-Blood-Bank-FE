import React, { useState } from "react";
import InputType from "../../form/InputType";
import API from "../../../../services/API";
import { useSelector } from "react-redux";

function Modal() {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGrop] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [donorEmail, setDonorEmail] = useState("");
  const { user } = useSelector((state) => state.auth);
  console.log(user?.email);
  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup || !quantity || !donorEmail) {
        return alert("Please provide all fields");
      } else {
        const { data } = await API.post("/inventory/create-inventory", {
          donorEmail,
          email: user?.email,
          organization: user?._id,
          inventoryType,
          bloodGroup,
          quantity,
        });
        if (data?.success) {
          alert("New Record Added");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Manage Blood Record
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="d-flex">
              Blood Type : &nbsp;
              <div className="form-check ms-3">
                <input
                  type="radio"
                  className="form-check-input"
                  name="inRadio"
                  defaultChecked
                  value={"in"}
                  onChange={(e) => setInventoryType(e.target.value)}
                />
                <label htmlFor="in" className="form-check-label">
                  In
                </label>
              </div>
              <div className="form-check ms-3">
                <input
                  type="radio"
                  className="form-check-input"
                  name="inRadio"
                  value={"out"}
                  onChange={(e) => setInventoryType(e.target.value)}
                />
                <label htmlFor="out" className="form-check-label">
                  Out
                </label>
              </div>
            </div>
            <select
              className="form-select mt-3 mb-3"
              aria-label="Default select example"
              onChange={(e) => setBloodGrop(e.target.value)}
            >
              <option defaultValue>Open this select menu</option>
              <option value="O-">O-</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="A-">A-</option>
              <option value="A+">A+</option>
            </select>
            <InputType
              labelText={"Donar email"}
              inputType={"email"}
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
            />
            <InputType
              labelText={"Quantity (ML)"}
              inputType={"number"}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleModalSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
