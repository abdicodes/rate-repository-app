import { CREATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useCreateReview = () => {
  const [createReviewReq, result] = useMutation(CREATE_REVIEW);

  const createReview = async (values) => {
    return createReviewReq({
      variables: {
        review: {
          repositoryName: values.repositoryName,
          ownerName: values.ownerName,
          rating: Number(values.rating),
          text: values.text,
        },
      },
    });
  };

  return [createReview, result];
};

export default useCreateReview;
