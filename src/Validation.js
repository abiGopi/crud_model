import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./schema";
import axios from "axios";
import UpdateUser from "./UpdateUser";
export default function Validation() {
  const [userData, setUserData] = useState();
  const [updateUser, setUpdateUser] = useState({});

  const handleValidationSubmit = async (data) => {
    try {
      const submitResponse = await axios({
        url: "http://54.202.218.249:9501/api/users",
        method: "post",
        data: data,
      });
      if (submitResponse.status == 201) {
        alert("User Created successfully");
        viewHandler();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      phoneNumber1: "",
      phoneNumber2: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      qualification: "",
      comment: "",
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      handleValidationSubmit(values);
    },
  });
  const editHandler = (data) => {
    setUpdateUser(data);
  };

  const handleUpdateUserSubmit = async (editProfileData) => {
    debugger;
    try {
      const editResponse = await axios({
        url: `http://54.202.218.249:9501/api/users/${editProfileData._id}`,
        method: "put",
        data: editProfileData,
      });
      if (editResponse.status == 200) {
        alert("User Profile updated successfully");
        viewHandler();
        setUpdateUser({});
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const deleteHandler = async (id) => {
    try {
      const deleteResponse = await axios({
        url: `http://54.202.218.249:9501/api/users/${id}`,
        method: "delete",
      });
      if (deleteResponse.status == "204") {
        alert("User deleted successfully");
        viewHandler();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  const viewHandler = async () => {
    try {
      const viewResponse = await axios({
        url: "http://54.202.218.249:9501/api/users",
        method: "get",
      });

      if (viewResponse.status == "200") {
        setUserData(viewResponse.data);
      } else {
        alert("Something went wrong");
        setUserData({});
      }
    } catch (error) {
      alert("Something went wrong");
      setUserData({});
    }
  };
  const onCloseHandler = () => {
    setUpdateUser({});
  };

  return (
    <div>
      {" "}
      <div className="container">
        <div className="register col-md-5 col-sm-6">
          <h1 className="title">
            <strong>Bio Data</strong>
          </h1>
          {/* <form role="form"> */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="reg_txt">
                Name <span>*</span>
              </label>
              <div className="controls form-inline">
                <input
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  className="input-name"
                  placeholder="First"
                />

                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    className="input-name"
                    placeholder="Last"
                  />
                </div>
              </div>
              {touched.firstName && errors.firstName ? (
                <span className="error-msg-txt">{errors.firstName}</span>
              ) : null}
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
                onChange={handleChange}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <span className="error-msg-txt">{errors.email}</span>
              ) : null}
            </div>
            <div className="clearfix"></div>
            {/* <div className="form-group" style="height:70px;"> */}
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
                  onChange={handleChange}
                  value={values.phoneNumber}
                />
              </div>
              <div className="line">-</div>
              <div className="wsite-form">
                <input
                  type="text"
                  className="text input-name1"
                  name="phoneNumber1"
                  onChange={handleChange}
                  value={values.phoneNumber1}
                />
              </div>
              <div className="line">-</div>
              <div className="wsite-form">
                <input
                  type="text"
                  className="text input-name1"
                  name="phoneNumber2"
                  onChange={handleChange}
                  value={values.phoneNumber2}
                />
              </div>
              {touched.phoneNumber && errors.phoneNumber ? (
                <span className="error-msg-txt">{errors.phoneNumber}</span>
              ) : null}
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
                onChange={handleChange}
                value={values.address1}
                // style="margin-bottom:15px;"
              />
              {touched.address1 && errors.address1 ? (
                <span className="error-msg-txt">{errors.address1}</span>
              ) : null}
              <input
                type="text"
                className="form-register text"
                id=""
                placeholder="Line 2"
                name="address2"
                onChange={handleChange}
                value={values.address2}
              />
            </div>

            <div className="form-group">
              <div className="controls form-inline">
                <input
                  type="text"
                  className="input-name"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  value={values.city}
                />
                <input
                  type="text"
                  className="input-name"
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                  value={values.state}
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
                  onChange={handleChange}
                  value={values.zipCode}
                />
                <input
                  type="text"
                  className="input-name"
                  placeholder="Country"
                  name="country"
                  onChange={handleChange}
                  value={values.country}
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
                onChange={handleChange}
                value={values.qualification}
                // style="margin-bottom:15px;"
              />
              {touched.qualification && errors.qualification ? (
                <span className="error-msg-txt">{errors.qualification}</span>
              ) : null}
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
                onChange={handleChange}
                value={values.comment}
              ></textarea>
              {touched.comment && errors.comment ? (
                <span className="error-msg-txt">{errors.comment}</span>
              ) : null}
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="mx-2 btn btn-default submit"
                // style="width:97%;"
              >
                Submit
              </button>
            </div>
          </form>
          <button
            className="mx-2 btn ed"
            onClick={viewHandler}
            //    style="background:#000;"
          >
            View
          </button>
        </div>
        {userData && (
          <div className="col-md-6 tabt">
            <table className="table">
              <thead className="ztxt">
                <th>FirstName</th>
                <th>LastName</th>
                <th>E-mail</th>
                <th>Phone number</th>
                <th>Address</th>
                <th>Qualification</th>
                {/* <th>comments</th> */}
              </thead>
              <tbody>
                {userData.map((item) => {
                  return (
                    <tr>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>

                      <td>
                        {item.address1}
                        {","}
                        {item.address2} {","}
                        {item.city} {","}
                        {item.state} {","}
                        {item.zipCode}
                      </td>
                      <td>{item.qualification}</td>
                      {/* <td>{item.comment}</td> */}
                      <td>
                        <button
                          className="ed"
                          onClick={() => editHandler(item)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="ed"
                          onClick={() => deleteHandler(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {
        <UpdateUser
          data={updateUser}
          isModel={Object.keys(updateUser).length > 0 ? true : false}
          onClose={onCloseHandler}
          handleUpdateUserSubmit={handleUpdateUserSubmit}
        />
      }
    </div>
  );
}
