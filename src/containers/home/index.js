import React, { useState, useRef} from "react"; // biblioteca principal
import axios from "axios"; // realiza requisiçoes HTTP como GET, PUT, DELETE, POST.
  //O HTTP é um protocolo para transferir informações 
import { useHistory } from "react-router-dom";
  import People from "../../assets/people.svg"; // arquivo d img
import Arrow from "../../assets/arrow.svg"; // arquivo d img

import  H1  from "../../components/Title";
import  ContainerItens  from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from './styles';

                       
function App() {
  const [users, setUsers] = useState([]);
  const history= useHistory()
  const inputName = useRef()
  const inputAge = useRef()  
// useState= amarzena informações, mais conhecido com Estado, esse estado pode ser um array ou um objeto
// setUsers= Executa ao carregar a pagina e quando mudo o valor dentro do [];
// useRef= cria uma variavel que pode ser mudada, ele tmb aceita o jsx
 
 


  async function addNewUser() {
 const {data: newUsers} =  await axios.post("http://localhost:3001/users",{
 name: inputName.current.value,
 age: inputAge.current.value, 
 
});
// newUsers= armazena as informações que vem do input name e age
// setUsers= adiciona o novo users a lista
setUsers([...users,newUsers]);

history.push('/usuarios')

  }  
  
//useEffect= busca os dados do usario na API
//newUsers= quando os dados sao recebidos eles sao armazenados nessa variavel
//setUsers= aonde esta sendo atualizado o estado
//fetchUsers= busca os dados da atulizacao da API
//[users]= array de dependecia que faz o useEffect ser executado quando o users é atualizado


  return (
    <Container>
      
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}> Cadastrar <img alt="seta" src={Arrow}/>
      
        </Button>

    
      </ContainerItens>
    </Container>
  );

}

export default App





 //const nome = "Diogo" //Variavel

  //const objeto = {Diogo: "18" } //Objeto formato

          
 // const array = [{Diogo: "18", idade: 10},{Diogo: "18", idade: 10} ] //Array de objeto
 
 //useEffect(() => {
  //async function fetchUsers(){
  //const {data:newUsers}= await axios.get ("http://localhost:3001/users");
  // useEffect= busca dados do usuario com a ajuda da biblioteca axios
  // fetchUsers= serve para buscar informaçoes especificas no servidor, HTTP GET
  
//console.log(newUsers);
 //setUsers(newUsers);
//}
//fetchUsers()
//}, [])

//Estrutura UseEffect
// useEffect(()=>{},[]) 
