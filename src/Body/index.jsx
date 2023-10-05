import DataPage from "./DataPage";
import { useEffect } from "react";
import { getShipmentData } from "../services/apiServices";
import { setShipmentData } from "../services/stateServices";
import { useDispatch } from "react-redux";

function Body() {
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            getShipmentData().then(data => {
                console.log(data);
                dispatch(setShipmentData(data));
            })
        } catch (error) {
            console.log(error);
        }

    }, [dispatch]);

    return (
        <>
            <DataPage />
        </>
    )
}

export default Body;
