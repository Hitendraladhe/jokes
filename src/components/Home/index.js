import React,{Component} from 'react'
import './index.css'
import Navbar from '../Navbar'

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      data: [],
    }
  }

  componentDidMount(){
    this.getData();
    // let history = useNavigate()
    // const auth = localStorage.getItem(user);
    // !auth ? history('/login') : ''
   }

  getData=async ()=>{
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10");
     const da =await res.json();
     console.log(da.jokes);
     this.setState({data: da.jokes});
    } catch (error) {
     throw new console.log(error); 
    }
      
  }

      
 render(){
  const {data} = this.state
  return (
    <>
    <div className='container'>
      <Navbar/>
      <h1>table</h1>
      <table className='table'>
      <tbody className='tbodyhed'>
        <th>Id</th>
        <th>Jokes</th>
        <th>Category</th>
        </tbody>
        
        {data && data.map((ea)=>{
          return(
          <tbody className='tbodydata'>
          <td>{ea.id}</td>
          <td>{ea.joke}</td>
          <td>{ea.category}</td>
          </tbody>
        )})}
       
      </table>
    </div>
    </>

  )
 }
}

export default Home
