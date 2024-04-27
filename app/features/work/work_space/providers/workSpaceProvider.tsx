import { ReactNode, createContext } from "react";
import { WorkSpaceContextType } from "../type";
import { useWorkSpace } from "../hooks/useWorkSpace";

/**
 * Context
 */
export const WorkSpaceContext = createContext<WorkSpaceContextType>({} as WorkSpaceContextType);

export const WorkSpaceProvider = (
    {children} : {children: ReactNode}
): JSX.Element => {
    const workSpaceContextValue = useWorkSpace();
    return (
        <WorkSpaceContext.Provider value={workSpaceContextValue}>
            {children}
        </WorkSpaceContext.Provider>
    );
}
