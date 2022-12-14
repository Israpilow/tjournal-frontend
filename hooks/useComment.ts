import { Dispatch, SetStateAction, useEffect, useState } from 'react';



import { Api } from '../utils/api';
import { CommentItem } from '../utils/api/types';


type UseCommentsProps = {
  comments: CommentItem[];
  setComments: Dispatch<SetStateAction<CommentItem[]>>;
};

export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = useState<CommentItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId);
        setComments(arr);
      } catch (error) {
        console.warn('Error comment', error);
      }
    })();
  }, []);

  return { comments, setComments };
};