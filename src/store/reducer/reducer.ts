import { boardReducer } from "../slices/boardSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer={
    logger : loggerReducer,
    boards : boardReducer,
    modals : modalReducer
}

export default reducer;