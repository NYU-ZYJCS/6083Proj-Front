import {useState} from "react";
import {submitVehicleSearch} from "api/SetOrderAPI";

export function useVehicleData() {
    const [showResult, setShowResult] = useState(false);
    const [vehicleList, setVehicleList] = useState([]);
    const [loadingVehicle, setLoadingVehicle] = useState(false);
    const fetchData = async (formData) => {
        setLoadingVehicle(true);
        setShowResult(true);
        try {
            const response = await submitVehicleSearch(formData);
            setVehicleList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setShowResult(false);
        }
        setLoadingVehicle(false);

    };

    return { showResult: showResult,vehicleList: vehicleList, fetchData, loadingVehicle: loadingVehicle };
}
