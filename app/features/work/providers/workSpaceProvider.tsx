import { ReactNode, createContext } from "react";
import { LayoutContextType, WorkSpaceContextType } from "../type";
import { useWorkSpace } from "../hooks/useWorkSpace";
import { useLayout } from "../hooks/useLayout";

/**
 * Context
 */
export const WorkSpaceContext = createContext<WorkSpaceContextType>({} as WorkSpaceContextType);
export const LayoutContext = createContext<LayoutContextType>({} as LayoutContextType);

export const WorkSpaceProvider = (
    {children} : {children: ReactNode}
): JSX.Element => {
    const workSpaceContextValue = useWorkSpace();
    const layoutContextValue = useLayout();

    return (
        <WorkSpaceContext.Provider value={workSpaceContextValue}>
            <LayoutContext.Provider value={layoutContextValue}>
                {children}
            </LayoutContext.Provider>
        </WorkSpaceContext.Provider>
    );
}
