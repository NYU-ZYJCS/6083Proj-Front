import * as setOrderMock  from "mock/setOrderMock";
import axios from "axios";

const useMock = process.env?.REACT_APP_USE_MOCK_API ?? false;

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
        return api.post('vehicle/search', formData);
    }
}

export const getOfficeList = () => {
    if (useMock) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(setOrderMock.fetchOfficeList);
            }, 1000);
        })
    } else {
        return api.get('office-list');
    }
}