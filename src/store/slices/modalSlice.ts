import {createSlice} from "@reduxjs/toolkit"
import type { ITask } from "../../types";

type TModalState = {
    boardId : string;
    listId : string;
    task : ITask

}
const initialState : TModalState = {
    boardId : "1",
    listId : "list",
    task : {
        taskId :"1",
        taskName : "1",
        taskDescription : "d",
        taskOwner : "kim"
    }
}

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers:{

    }
})

export const modalReducer = modalSlice.reducer;