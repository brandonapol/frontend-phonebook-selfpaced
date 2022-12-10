import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Background from '../assets/images/willian-justen-de-vasconcellos-jUCQRQeRs3k-unsplash.jpg'

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })` }} className="flex flex-row justify-center mx-auto bg-cover bg-fixed">
        <div className="flex place-items-center h-screen">
          <h3 className="p-5 bg-white bg-opacity-25 text-black">Welcome to the Phonebook</h3>
        </div>
    </div>
  )
}
