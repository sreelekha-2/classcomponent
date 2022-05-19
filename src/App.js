import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Userdata  from './components/Userdata';

function App() {

  const users=["sreelekha","sree","lekha"]
  const employeesData=[{"id":1, "name":"sushma","age":30, "salary":30000},
  {"id":2, "name":"sadwik","age":35, "salary":38000},
  {"id":3, "name":"sachin","age":40, "salary":43000},
  {"id":4, "name":"sneha","age":23, "salary":25000}]
  return (
    <div>
          <Userdata userdata={users} empdata={employeesData}/>
          <Counter/>

    </div>

  );
}

export default App;
