import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 0.4em;
`;

function HomePage(props) {
  return (
    <div>
      <Title>HomePage</Title>
      <p>Welcome welcome</p>
    </div>
  );
}
export default HomePage;
