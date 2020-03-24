import {
    DELETE_TASK,
    PICK_UP_TIME,
    TODO_ADDITION,
    TODO_COMPLETED,
    UNDO_COMPLETED,
    REMOVE_ALL_TASKS,
    REPLACE_EDITED_TASK,
    DELETE_COMPLETED_TASK,
    REMOVE_ALL_COMPLETED_TASKS
} from "../actionTypes";

const initialState = {
    nextId: 0,
    completed: [],
    data: [],
    time: [],
};

export default function (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case TODO_ADDITION:
            const {
                inputValue
            } = action.payload;
            ++state.nextId;
            return {
                ...state,
                data: [...state.data, {
                    'id': state.nextId,
                    'value': inputValue,
                    'time': []
                }]
            }
        case TODO_COMPLETED:
            const { itemId } = action.payload;
            return {
                ...state,
                completed: [...state.completed, ...state.data.filter((item) => item.id === (itemId))],
                data: [...state.data.filter((item) => item.id !== (itemId))]
            }
        case DELETE_TASK:
            const { taskId } = action.payload;
            var new_Data = [...state.data.filter((item) => item.id !== (taskId))];
            for (var i = 0; i < new_Data.length; i++){
                const new_id = i + 1;
                new_Data[i].id = new_id;
            }
            const next_Id = new_Data.length;
            return {
                ...state,
                data: new_Data,
                nextId: next_Id
            }
        case DELETE_COMPLETED_TASK:
            const {
                completedTaskId
            } = action.payload;
            return {
                ...state,
                completed: [...state.completed.filter((item) => item.id !== (completedTaskId))]
            }
        case UNDO_COMPLETED:
            const { undoItem } = action.payload;
            return {
                ...state,
                completed: [...state.completed.filter((item) => item.id !== (undoItem.id))],
                data: [...state.data, {
                    'id': undoItem.id,
                    'value': undoItem.value,
                }],
            }
        case REMOVE_ALL_TASKS:
            return {
                ...state,
                data: [],
                nextId: 0 // TODO: Please have a look here if you have time
            }
        case REPLACE_EDITED_TASK:
            const { editedTask } = action.payload;
            console.warn('state.data : ', state.data, ' editedTAsk : ', editedTask);
            const newData = [...state.data];
            var ItemIndex = 0;
            for (var a = 0; a < newData.length; a++){
                if (newData[a].id === editedTask.id) {
                  ItemIndex = newData.indexOf(newData[a]);
                }
            }
            newData[ItemIndex] = editedTask;
            console.log(newData.length);
            
            return {
                ...state,
                data: newData
            }
        case REMOVE_ALL_COMPLETED_TASKS:
            return {
                ...state,
                completed: []
            }
        case PICK_UP_TIME:
            const {
                timeString,
                id
            } = action.payload;
            console.log('state : ', state, 'timestring : ', timeString, 'id : ', id);
            const newUpdatedData = [...state.data];
            newUpdatedData.map(item => {
                if (item.id === id) {
                    item.time = timeString;
                }
            })
            return {
                ...state,
                time: timeString,
                data: newUpdatedData
            }
        default:
            return {...state}
    }
}