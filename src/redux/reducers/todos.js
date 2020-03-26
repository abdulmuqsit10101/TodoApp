import {
  DELETE_COMPLETED_TASK,
  DELETE_TASK,
  PICK_UP_TIME,
  REMOVE_ALL_COMPLETED_TASKS,
  REMOVE_ALL_TASKS,
  REPLACE_EDITED_TASK,
  TODO_ADDITION,
  TODO_COMPLETED,
  UNDO_COMPLETED
} from "../actionTypes";

const initialState = {
    nextId: 0,
    completed: [],
    data: [],
    startDateTime: '',
    endDateTime: ''
};

export default function (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case TODO_ADDITION:
            const {
                task, startDateTime, endDateTime
            } = action.payload;
            ++state.nextId;
            return {
                ...state,
                data: [...state.data, {
                    'id': state.nextId,
                    'value': task,
                    'startDateTime': startDateTime,
                    'endDateTime': endDateTime
                }]
            };
        case TODO_COMPLETED:
            const { itemId } = action.payload;
            return {
                ...state,
                completed: [...state.completed, ...state.data.filter((item) => item.id === (itemId))],
                data: [...state.data.filter((item) => item.id !== (itemId))]
            };
        case DELETE_TASK:
            const { taskId } = action.payload;
          const new_Data = [...state.data.filter((item) => item.id !== (taskId))];
          for (let i = 0; i < new_Data.length; i++){
            new_Data[i].id = i + 1;
            }
            const next_Id = new_Data.length;
            return {
                ...state,
                data: new_Data,
                nextId: next_Id
            };
        case DELETE_COMPLETED_TASK:
            const {
                completedTaskId
            } = action.payload;
            return {
                ...state,
                completed: [...state.completed.filter((item) => item.id !== (completedTaskId))]
            };
        case UNDO_COMPLETED:
            const { undoItem } = action.payload;
            return {
                ...state,
                completed: [...state.completed.filter((item) => item.id !== (undoItem.id))],
                data: [...state.data, {
                    'id': undoItem.id,
                    'value': undoItem.value,
                }],
            };
        case REMOVE_ALL_TASKS:
            return {
                ...state,
                data: [],
                nextId: 0 // TODO: Please have a look here if you have time
            };
        case REPLACE_EDITED_TASK:
            const { editedItem } = action.payload;
            console.log('REPLACE_EDITED_TASK editedItem ', editedItem);
            const newData = [...state.data];
            let ItemIndex = 0;
            for (let a = 0; a < newData.length; a++){
                  if (newData[a].id === editedItem.id) {
                    ItemIndex = newData.indexOf(newData[a]);
                  }
              }
            newData[ItemIndex] = editedItem;
            return {
                ...state,
                data: newData
            };
        case REMOVE_ALL_COMPLETED_TASKS:
            return {
                ...state,
                completed: []
            };
        case PICK_UP_TIME:
            const {
                timeString,
                id
            } = action.payload;
            const newUpdatedData = [...state.data];
            newUpdatedData.map(item => {
                if (item.id === id) {
                    item.time = timeString;
                }
            });
            return {
                ...state,
                time: timeString,
                data: newUpdatedData
            };
        default:
            return {...state}
    }
}
