import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { PostSpaceContextType } from '../types';
import { PostSpaceContext } from '../providers/postSpaceProvider';

export const Preview = (): JSX.Element => {
  const postSpaceContext: PostSpaceContextType = useContext(PostSpaceContext);

  return <ReactMarkdown>{postSpaceContext.markdown}</ReactMarkdown>;
};
