import axios from './axios/axios.js';

const EMPLOYEE_API_URL = '/employees';

class EmployeeService {

    getEmployees(){
        return axios.get(`${EMPLOYEE_API_URL}`);
    }

    createEmployee(employee){
        return axios.post(`${EMPLOYEE_API_URL}/`, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(`${EMPLOYEE_API_URL}/${employeeId}`);
    }

    updateEmployee(employee, employeeId){
        return axios.put(`${EMPLOYEE_API_URL}/${employeeId}/`, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(`${EMPLOYEE_API_URL}/${employeeId}/`);
    }
}

export default new EmployeeService()