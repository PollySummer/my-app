import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    shipmentData: null,
    selectedOrder: false,
    showModal: false,
};

export const setShipmentData = createAction('setShipmentData');
export const setSelectedOrder = createAction('setSelectedOrder');
export const setShowModal = createAction('setShowModal');

const reducer = createReducer(initialState, {
    [setShipmentData]: (state, action) => {
        state.shipmentData = action.payload;
    },
    [setSelectedOrder]: (state, action) => {
        state.selectedOrder = action.payload;
    },
    [setShowModal]: (state, action) => {
        state.showModal = action.payload;
    },
});

export const store = configureStore({ reducer });