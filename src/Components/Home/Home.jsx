
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Swal from 'sweetalert2/src/sweetalert2.js'
import Cart from '../Cart/Cart';
const Home = () => {
const [allActors,setAllActors] = useState([])
const [selectedActor,setSelectedActor] = useState([])
const [remaining,setremaining] = useState(0);
const [totalCost,setTotalCost] = useState(0)
    useEffect(() => {
      fetch('./data.json')
      .then((res)=>res.json())
      .then((data)=>setAllActors(data))
    },[]);

    const handleselectActor = (actors) =>{
        const isExits = selectedActor.find(item => item.id == actors.id);
         let count = actors.salary;
        if(isExits){
          return alert("Allready Booked.");
        }else{
          selectedActor.forEach((item) =>{
            count = count + item.salary;
          })
          const totalRemaining = 20000 - count;
  
          if(count > 20000){
           return alert("Taka shes r hobe na")
          //  sweet alert
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: 'Something went wrong!',
          //   footer: '<a href="">Why do I have this issue?</a>'
          // })
          }else{
            setTotalCost(count)
            setremaining(totalRemaining)
            setSelectedActor([...selectedActor,actors])
          } 
        }
        
    }
    // console.log(selectedActor);
    return (
        <div className='container'>
             <div className="home-container">
               <div className="card-container">
                {
                    allActors.map((actor,id)=>(
                      <div className="card" key={id}>
                        <div className="card-img">
                           <img className="photo" src={actor.image} alt="" />
                        </div>
                        <h2>{actor.name}</h2>
                        <p><small>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, impedit.
                            </small></p>
                            <div className="info">
                                <p>Salary : ${actor.salary}</p>
                                <p>{actor.role}</p>
                            </div>
                            <button onClick={() => handleselectActor(actor)} className='card-btn'>Select</button>
                      </div>
                    ))
                }
               </div>
               <div className="cart">
                <Cart cartActor={selectedActor} remaining={remaining} totalCost={totalCost}/>
               </div>
           </div>
           
        </div>
    );
};

export default Home;



