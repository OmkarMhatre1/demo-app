import React, { useEffect, useState } from "react";
import EmpService from "../../services/EmpService";
import axios from "axios";
import { Link } from "react-router-dom";

const EmpList = () => {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmpService.getAllEmp()
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmpService.getAllEmp();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("http://localhost:8080/employee");
  //       console.log(response);
  //       setEmployees(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("http://localhost:8080/employee");
  //       console.log(response);
  //       setEmployees(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <h2 className="text-center">List Employee</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        {" "}
        Add Emp{" "}
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Employee Id</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th>Actions</th>
        </thead>
        {!loading && (
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`edit-employee/${employee.id}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default EmpList;
