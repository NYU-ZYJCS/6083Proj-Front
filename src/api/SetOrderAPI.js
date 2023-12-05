import * as setOrderMock  from "mock/setOrderMock";
import axios from "axios";

const useMock = process.env.REACT_APP_USE_MOCK_API === "true";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/set-order',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const submitVehicleSearch = (formData) => {
    console.log(useMock);
    if (useMock === true) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(setOrderMock.fetchVehicleList);
            }, 1000);
        })
    } else {
        return api.post(`vehicle/search?officeID=${formData.officeID}&startTime=${1}&endTime=${2}`, null).then(response => {
            return response.data;
        });
    }
}

export const getOfficeList = () => {
    if (useMock === true) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(setOrderMock.fetchOfficeList);
            }, 1000);
        })
    } else {
        return api.get('office-list').then(response => {
            return response.data;
        });
    }
}