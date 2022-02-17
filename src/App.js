import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Content from './component/Content';
import Header from './component/Header';
import Voted from './component/Voted';
import {useState , useEffect} from 'react';

function App() {
  const [data , setData] = useState([]);
  const [value , setValue] = useState({'vl':0});
  useEffect(()=>{
    setValue({'vl' : Math.floor(Math.random()*(data.length))});
    axios.get('https://testzens.herokuapp.com/')
    .then(res=>{
      setData(res.data);
    })
    .catch(err =>{
      console.log(err);
    })
  },[]);

  function handleLike(yourChoice , valueContent){
    axios.get(`https://testzens.herokuapp.com/${yourChoice}/${valueContent}`)
            .then(res=>{
                //console.log(res.data)
            })
            .catch(err =>{
               // console.log(err);
        })
    if(data.length > 0){
      data.splice(value.vl,1)
      setData(data);
      setValue({'vl':Math.floor(Math.random()*(data.length))})
    }
    else{
      setData({content:"That's all the jokes for today! Come back another day!"});
    }
  } 

  return (
    <div style={{textAlign:'center'}}>
      <Header/>
      <Content data={data[value.vl]?.id ? data[value.vl] : data}/>
      {
        data.length !== 0? 
        <Voted data={{handleLike: handleLike , content:data[value.vl]}}/> : <></>
      }
    </div>
  );
}

export default App;
