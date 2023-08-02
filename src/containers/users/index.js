import React, { useState, useEffect } from "react"; // biblioteca principal
import { useHistory } from 'react-router-dom'
import axios from "axios"; // realiza requisiçoes HTTP como GET, PUT, DELETE, POST.
//O HTTP é um protocolo para transferir informações 
import Avatar from "../../assets/avatar.svg"; // arquivo d img
import Arrow from "../../assets/arrow.svg"; // arquivo d img
import Trash from "../../assets/trash.svg"; //  arquivo d img

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from "../../components/Button";

import { Container, Image, User } from './styless';


function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  // useState= amarzena informações, mais conhecido com Estado, esse estado pode ser um array ou um objeto
  // setUsers= Executa ao carregar a pagina e quando mudo o valor dentro do [];
  // useRef= cria uma variavel que pode ser mudada, ele tmb aceita o jsx
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      // useEffect= busca dados do usuario com a ajuda da biblioteca axios
      // fetchUsers= serve para buscar informaçoes especificas no servidor, HTTP GET

      console.log(newUsers);
      setUsers(newUsers);
    }
    fetchUsers()
  }, [])

  //Estrutura UseEffect
  // useEffect(()=>{},[]) 





  //useEffect= busca os dados do usario na API
  //newUsers= quando os dados sao recebidos eles sao armazenados nessa variavel
  //setUsers= aonde esta sendo atualizado o estado
  //fetchUsers= busca os dados da atulizacao da API
  //[users]= array de dependecia que faz o useEffect ser executado quando o users é atualizado

  async function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
    await axios.delete(`http://localhost:3001/users/${userId}`);
  }

  function goBackPage() {
    history.push('/')
  }
  return (
    <Container>

      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuarios!</H1>



        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lata-de-lixo ' />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
        Voltar <img alt="seta" src={Arrow} /> 
        
        </Button>

      </ContainerItens>
    </Container>
  );

}

export default Users






