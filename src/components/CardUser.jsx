import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useApi'

const CardUser = ({user}) => {

  return (
    <article className='card'>
      <img src={user?.picture.large} alt="user avatar" />
      <h2>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h2>
      <ul>
        <li><b>City: </b>{`${user?.location.city}, ${user?.location.country}`}</li>
        <li><b>Email: </b>{user?.email}</li>
      </ul>
    </article>
  )
}

export default CardUser