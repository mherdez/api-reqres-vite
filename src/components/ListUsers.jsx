import { useState } from "react";
import { getUsersLocal } from "../helpers/getUsersLocal"
import { getUsersPromise } from "../helpers/getUsersPromise";
import { getUsersFetch } from "../helpers/getUsersFetch";
import { getUsersAsyncAwait } from "../helpers/getUsersAsyncAwait";

export const ListUsers = () => {

const [users, setUsers] = useState([])


  if ( users.length === 0 ) {

    // DATA ASYNC - AWAIT

    getUsersAsyncAwait().then( setUsers )

    // DATA FETCH

    getUsersFetch().then( data => setUsers( data ))

    // DATA PROMISE

    getUsersPromise()
      .then( resp => resp.json()
      .then( ({ data }) => setUsers( data )
    ))

    // DATA LOCAL

    const { data } = getUsersLocal();
    setUsers( data )
  }



  return (
    <div className='list-users'>
      {
        users.map( ({ id, avatar, first_name, last_name }) => (
          <article key={id} className='list-user-item'>
            <img className="list-user-item-avatar" src={avatar} alt="" />
            <div className="list-user-item-name">
              <p> {first_name} </p>
              <p> {last_name} </p>
            </div>
          </article>
        ))
      }
    </div>
  )
}
