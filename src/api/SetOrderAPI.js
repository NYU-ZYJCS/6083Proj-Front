import * as setOrderMock  from "../mock/SetOrderMock";
const useMock = process.env?.REACT_APP_CLIENT_ID ?? false;
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const submitVehicleSearch = (formData) => {
    if (useMock) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(setOrderMock.fetchVehicleList);
            }, 1000);
        })
    } else {
        return api.post('/vehicle/search', formData);
    }
}