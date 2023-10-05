import DataPage from "./DataPage";
import { useEffect, useState } from "react";
import { getShipmentData } from "../services/apiServices";

function Body() {
    const [shipmentData, setShipmentData] = useState(null);

    useEffect(() => {
        try {
            getShipmentData().then(data => {
                console.log(data);
                setShipmentData(data);
            })
        } catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <>
            <DataPage shipmentData={shipmentData} />
        </>
    )
}

export default Body;
