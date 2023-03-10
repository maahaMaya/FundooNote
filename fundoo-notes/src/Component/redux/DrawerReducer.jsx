const initalDrawerState = {
    label: 'Keep'
}
export const DrawerReducer = (state = initalDrawerState, action) => {
    console.log("Action coming in Reducer", action)
    switch (action.type) {
        case "Notes":
            return { ...state, title: "Keep" };
        case "Reminders":
            return { ...state, title: "Reminders" };
        case "Edit":
            return { ...state, title: "Edit" };
        case "Archieve":
            return { ...state, title: "Archieve" };
        case "Trash":
            return { ...state, title: "Trash" };
        default:
            return { ...state, title: "Keep" };
    }
}
