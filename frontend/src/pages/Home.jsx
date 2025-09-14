import React from 'react'
import HomeCenter from '../components/HomeCenter'
import { useUser } from '@clerk/clerk-react'


const Home = () => {
  const { user } = useUser();
  return (
    !user ? (<HomeCenter/>):
    (
      <div></div>
    )
    

  )
}

export default Home
