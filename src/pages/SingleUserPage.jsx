import { useParams } from 'react-router-dom';
import { Section, Title } from '../components/styled/UI.styled';

function SingleUserPage(props) {
  const allParams = useParams();
  const currentUserId = allParams.userId;

  // susikurti data state for current user currentUser
  // parsisiusti su feth useEffecte duomenis apie konkretu useri
  // is gautu duomenu atvaizduojam daugiau info apie useri

  return (
    <Section>
      <Title>SingleUserPage</Title>
      <p>I should load 🦸 with id: {currentUserId}</p>
    </Section>
  );
}
export default SingleUserPage;
