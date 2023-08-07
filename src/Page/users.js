import React,{useState, useEffect} from "react";
import Axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users"
//const API =  "http://localhost:3000/public/mocks/users.json"
function UsersListing()
{
    const [users, setUsers] =useState(null)
    useEffect(()=>{
       //fetch("https://jsonplaceholder.typicode.com/users")
       //.then((response)=>response.json())
       //.then((result) =>setUsers(result))
      Axios.get(API).then((response) => {
        if(response && response.status==200)
        {
           console.log(response)
           setUsers(response.data)
        }
      })
      .catch((err) =>console.log("ERR: FETCHING TODO FAILED",err))
           },[])

    function updateState(user={})
    {
        let usersCopy =[...users]
        usersCopy.push(user)
        setUsers(usersCopy)
    }

        function saveData()
        {
            Axios.post(API,{
                "id": "12",
                "name": "Tharun Dhana",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Bai Kadai",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
              }).then((result) => console.log(result)).catch((err)=>console.log(err))
        }   
    return<div>
        <ul>
            {
            users&&users.map((d,i)=><li key={`users-List-${i}`}>{d.name}</li>)
            }
        </ul>
        <button onClick={saveData}>Save Data</button>
    </div>
}

export default UsersListing