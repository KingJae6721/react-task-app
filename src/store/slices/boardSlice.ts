import { createSlice } from "@reduxjs/toolkit";
import type { IBoard } from "../../types";

type TBoardState = {
    modalActive : boolean;
    boardArray : IBoard[]
}

const initialState : TBoardState= {
  modalActive: false,
  boardArray: [
    {
      boardId: "borad-0",
      boardName: "1,",
      lists: [
        {
          listId: "1",
          listName: "1",
          tasks: [
            {
              taskId: "task=0",
              taskName: "Task 1",
              taskDescription: "1",
              taskOwner: "kim",
            },
            {
              taskId: "task=1",
              taskName: "Task 2",
              taskDescription: "2",
              taskOwner: "lim",
            },
          ],
        },
        {
          listId: "2",
          listName: "2",
          tasks: [
            {
              taskId: "task=2",
              taskName: "Task 2",
              taskDescription: "2",
              taskOwner: "foo",
            },
            {
              taskId: "task=3",
              taskName: "Task 3",
              taskDescription: "3",
              taskOwner: "hosa",
            },
          ],
        },
      ],
    },
  ],
};
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export const boardReducer = boardSlice.reducer;
