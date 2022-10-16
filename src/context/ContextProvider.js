
import { useReducer } from "react";
import { createContext } from "react";
export const ContentContext = createContext({});
const reducer = (state, action) => {
    switch (action.type) {
        case "changeToRed":
            return {
                ...state,
                colorValue: action.color,
            };
        case "changeToOrange":
            return {
                ...state,
                colorValue: action.color,
            };
        case "userRouterPermissions":
            return {
                ...state,
                routerPermissions: action.payload,
            };
        case "userRouterConfig":
            return {
                ...state,
                routerConfig: action.payload,
            };
        default:
            return state;
    }
};
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        colorValue: "",
        routerPermissions: "",
    });
    return (
        <ContentContext.Provider value={{ state, dispatch }}>
            {children}
        </ContentContext.Provider>
    );
};