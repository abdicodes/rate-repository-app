import CreateReviewContainer from './CreateReviewContainer';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const CreateReview = () => {
  // using navigation hook
  const navigate = useNavigate();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    try {
      const { data } = await createReview(values);

      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
