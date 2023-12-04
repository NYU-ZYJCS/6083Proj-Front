import React, {useEffect} from "react";
import {message} from "antd";
import {getOfficeList} from "api/SetOrderAPI";

export const useFetchVehicleList = () => {
    const [addressList, setAddressList] = React.useState([]);
    const [loadingAddress, setLoadingAddress] = React.useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        const fetchAddressList = async () => {
            setLoadingAddress(true);
            try {
                const response = await getOfficeList();
                setAddressList(response.data);

            } catch (error) {
                messageApi.open({
                    type: 'warning',
                    content: 'Error fetching address list',
                })
            }
            setLoadingAddress(false);
        };
        fetchAddressList();

    }, []);

    return {addressList, loadingAddress};
}