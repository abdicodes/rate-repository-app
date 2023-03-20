import { CREATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useCreateReview = () => {
  const [createReviewReq, result] = useMutation(CREATE_REVIEW);

  const CreateReview = async (values) => {
    return createReviewReq({
      variables: {
        review: { onwerName: values.onwerName, password: values.password },
      },
    });
  };

  return [CreateReview, result];
};

export default useCreateReview;
