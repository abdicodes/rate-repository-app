import { DELEATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useDeleteReview = () => {
  const [deleteReviewReq, result] = useMutation(DELEATE_REVIEW);

  const deleteReview = async (id) => {
    return deleteReviewReq({
      variables: {
        deleteReviewId: id,
      },
    });
  };

  return [deleteReview, result];
};

export default useDeleteReview;
