import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
export default function UpdateUser(props) {
  const [editProfileData, setEditProfileData] = useState({});
  useEffect(() => {
    setEditProfileData(props.data);
  }, [props.data]);
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div>
      {" "}
      <>
        <Modal show={props.isModel} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <form
            //   onSubmit={() => props.handleUpdateUserSubmit(editProfileData)}
            >
              <div className="form-group">
                <label className="reg_txt">
                  FirstName <span>*</span>
                </label>
                <div className="controls form-inline">
                  <input
                    type="text"
                    onChange={(e) => {
                      setEditProfileData({
                        ...editProfileData,
                        firstName: e.target.value,
                      });
                    }}
                    value={editProfileData?.firstName}
                    name="firstName"
                    className="input-name"
                    placeholder="First"
                  />

                  <div>
                    <input
                      type="text"
                      onChange={(e) => {
                        setEditProfileData({
                          ...editProfileData,
                          lastName: e.target.value,
                        });
                      }}
                      value={editProfileData?.lastName}
                      name="lastName"
                      className="input-name"
                      placeholder="Last"
                    />
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>

              <div className="form-group">
                <label className="reg_txt">
                  Email <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-register text"
                  id=""
                  placeholder="E-mail"
                  name="email"
                  onChange={(e) => {
                    setEditProfileData({
                      ...editProfileData,
                      email: e.target.value,
                    });
                  }}
                  value={editProfileData?.email}
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                <label className="reg_txt">
                  Phone Number <span>*</span>
                </label>
                <div className="clearfix"></div>
                <div className="wsite-form">
                  <input
                    type="text"
                    className="text input-name1"
                    name="phoneNumber"
                    onChange={(e) => {
                      setEditProfileData({
                        ...editProfileData,
                        phoneNumber: e.target.value,
                      });
                    }}
                    value={editProfileData?.phoneNumber}
                  />
                </div>
                <div className="line">-</div>
                <div className="line">-</div>
              </div>

              <div className="clearfix"></div>

              <div className="form-group">
                <label className="reg_txt">
                  Address <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-register text"
                  id=""
                  placeholder="Line 1"
                  name="address1"
                  onChange={(e) => {
                    setEditProfileData({
                      ...editProfileData,
                      address1: e.target.value,
                    });
                  }}
                  value={editProfileData?.address1}
                />
                <input
                  type="text"
                  className="form-register text"
                  id=""
                  placeholder="Line 2"
                  name="address2"
                  onChange={(e) => {
                    setEditProfileData({
                      ...editProfileData,
                      address2: e.target.value,
                    });
                  }}
                  value={editProfileData?.address2}
                />
              </div>

              <div className="form-group">
                <div className="controls form-inline">
                  <input
                    type="text"
                    className="input-name"
                    placeholder="City"
                    name="city"
                    onChange={(e) => {
                      setEditProfileData({
                        ...editProfileData,
                        city: e.target.value,
                      });
                    }}
                    value={editProfileData?.city}
                  />
                  <input
                    type="text"
                    className="input-name"
                    placeholder="State"
                    name="state"
                    onChange={(e) => {
                      setEditProfileData({
                        ...editProfileData,
                        state: e.target.value,
                      });
                    }}
                    value={editProfileData?.state}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="controls form-inline">
                  <input
                    type="text"
                    className="input-name"
                    placeholder="Zip Code"
                    name="zipCode"
                    onChange={(e) => {
                      setEditProfileData({
                        ...editProfileData,
                        zipCode: e.target.value,
                      });
                    }}
                    value={editProfileData?.zipCode}
                  />
                  <input
                    type="text"
                    className="input-name"
                    placeholder="Country"
                    name="country"
                    onChange={(e) => {
                      setEditProfileData({
                        ...editProfileData,
                        country: e.target.value,
                      });
                    }}
                    value={editProfileData?.country}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="reg_txt">
                  Write Your qualification <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-register text"
                  id=""
                  placeholder=""
                  name="qualification"
                  onChange={(e) => {
                    setEditProfileData({
                      ...editProfileData,
                      qualification: e.target.value,
                    });
                  }}
                  value={editProfileData?.qualification}
                  // style="margin-bottom:15px;"
                />
                {/* <!-- <input type="text" className="form-register text" id="" placeholder="Add your qualification"> <span><img alt="" src="images/plus.png" className="add"></span> --> */}
              </div>

              <div className="clearfix"></div>

              <div className="form-group">
                <label className="reg_txt">
                  Comment <span>*</span>
                </label>
                <textarea
                  className="form-register text"
                  name="comment"
                  onChange={(e) => {
                    setEditProfileData({
                      ...editProfileData,
                      comments: e.target.value,
                    });
                  }}
                  value={editProfileData?.comments}
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleUpdateUserSubmit(editProfileData);
                  }}
                  className="btn btn-default submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
