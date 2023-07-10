import axios from "axios";

const EMP_BASED_REST_API_URL = "http://localhost:8080/employee";

class EmpService {
  getAllEmp() {
    return axios.get(EMP_BASED_REST_API_URL);
  }

  createEmp(employee) {
    return axios.post(EMP_BASED_REST_API_URL, employee);
  }

  getEmpById(id) {
    return axios.get(EMP_BASED_REST_API_URL + '/' + id);
  }

  updateEmployee(id, employee){
    return axios.put(EMP_BASED_REST_API_URL + '/' +id, employee);
}
}

export default new EmpService();
