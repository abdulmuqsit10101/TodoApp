import {
    DELETE_TASK,
    PICK_UP_TIME,
    TODO_ADDITION,
    TODO_COMPLETED,
    UNDO_COMPLETED,
    REMOVE_ALL_TASKS,
    REPLACE_EDITED_TASK,
    DELETE_COMPLETED_TASK,
    REMOVE_ALL_COMPLETED_TASKS,
} from "./actionTypes";

// var nextId = 0;

export const addtodo = (task, startDateTime, endDateTime) => ({
    type: TODO_ADDITION,
    payload: {
        task,
        startDateTime,
        endDateTime
    }
});

export const moveToCompleted = val => ({
    type: TODO_COMPLETED,
    payload: {
        itemId: val
    }
});

export const deleteTask = val => ({
    type: DELETE_TASK,
    payload: {
        taskId: val
    }
});

export const deleteCompletedTask = id => ({
    type: DELETE_COMPLETED_TASK,
    payload: {
        completedTaskId: id
    }
});

export const handleEditiedTask = (editedItem) => ({
    type: REPLACE_EDITED_TASK,
    payload: {
        editedItem: editedItem
    }
});

export const undoCompleted = itemData => ({
    type: UNDO_COMPLETED,
    payload: {
        undoItem: itemData
    }
});


// TODO: Important to ask about this

export const clearAllTasks = () => ({
    type: REMOVE_ALL_TASKS,
    payload: null,
});

export const emptyCompleted = () => ({
    type: REMOVE_ALL_COMPLETED_TASKS,
    payload: null,
});

export const handleDateAndTime = (time,id) => ({
    type: PICK_UP_TIME,
    payload: {
        timeString: time,
        id: id
    }
});
