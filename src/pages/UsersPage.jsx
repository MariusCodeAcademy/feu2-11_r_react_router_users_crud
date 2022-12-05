import { useEffect, useState } from 'react';
import { Section } from '../components/styled/UI.styled';

function UsersPage(props) {
  // susikurti usersArr state
  const [usersArr, setUsersArr] = useState([]);
  // su useEffect supildyti state su duomenimis is https://dummyjson.com/users
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let url = 'https://dummyjson.com/users';
      url = '/api/users.json';
      const resp = await fetch(url);
      const dataInJs = await resp.json();
      // const usersWithNameAndId = dataInJs.users.map((uOb) => ({
      //   id: uOb.id,
      //   firstName: uOb.firstName,
      //   lastName: uOb.lastName,
      //   age: uOb.age,
      // }));
      // console.log(JSON.stringify(usersWithNameAndId));

      // dataInJs === {users: Array(30), total: 100, skip: 0, limit: 30}
      console.log('dataInJs ===', dataInJs.users);
    } catch (error) {
      console.warn('klaida getData', error);
    }
  }

  return (
    <Section>
      <h1>UsersPage</h1>
      <p>This is our users</p>
    </Section>
  );
}
export default UsersPage;
