import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    shipmentData: null,
    selectedOrder: false,
    showModal: false,
    hiddenRows: [],
};

export const setShipmentData = createAction('setShipmentData');
export const setSelectedOrder = createAction('setSelectedOrder');
export const setShowModal = createAction('setShowModal');
export const setHiddenRows = createAction('setHiddenRows');

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setShipmentData, (state, action) => {
            state.shipmentData = action.payload;
        })
        .addCase(setSelectedOrder, (state, action) => {
            state.selectedOrder = action.payload;
        })
        .addCase(setShowModal, (state, action) => {
            state.showModal = action.payload;
        }
        )
        .addCase(setHiddenRows, (state, action) => {
            state.hiddenRows = action.payload;
        }
        )
});

export const store = configureStore({ reducer });