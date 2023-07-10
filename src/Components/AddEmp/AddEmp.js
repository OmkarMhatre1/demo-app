import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import EmpService from "../../services/EmpService";
import { useNavigate, useParams } from "react-router-dom";

const AddEmp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // const saveEmployee = (e) => {
  //   e.preventDefault();

  //   const employee = { firstName, lastName, email };
  //   console.log(employee);

  //   EmpService.createEmp(employee)
  //     .then((res) => {
  //       console.log(res.data);
  //       navigate("/employees");
  //     })
  //     .catch((error) => {
  //       alert("Error adding Employee");
  //     });
  // };

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log(employee);
    if (id) {
      EmpService.updateEmployee(id, employee)
      .then((res)=>{
       // console.log(res.data);
        navigate("/employees");
      }).catch((error) =>{
        console.log(error)
      })
    } else {
      EmpService.createEmp(employee)
        .then((res) => {
          console.log(res.data);
          navigate("/employees");
        })
        .catch((error) => {
          alert("Error adding Employee");
        });
    }
  };

  useEffect(() => {
    EmpService.getEmpById(id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      })
      .catch((error) => {
        console.log("there is an error");
      });
  }, []);

  const reset = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-lable">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-lable">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-lable">Email:</label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <button className="btn btn-success" onClick={reset}>
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
