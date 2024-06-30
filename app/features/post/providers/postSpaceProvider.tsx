import { ReactNode, createContext } from 'react';
import { PostSpaceContextType } from '../types';
import { usePostSpace } from '../hooks/usePostSpace';

/**
 * Context
 */
export const PostSpaceContext = createContext<PostSpaceContextType>(
  {} as PostSpaceContextType
);

export const PostSpaceProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const PostSpaceContextValue = usePostSpace();

  return (
    <PostSpaceContext.Provider value={PostSpaceContextValue}>
      {children}
    </PostSpaceContext.Provider>
  );
};
