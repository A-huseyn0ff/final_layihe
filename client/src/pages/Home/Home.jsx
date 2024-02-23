import React from 'react'
import Application from '../../components/application/Application'
import { Helmet } from 'react-helmet'
import Header from '../../components/header/header'
import Popular from '../../components/popular/Popular'
import Turizm from '../../components/turizm/Turizm'
import Theatre from '../../components/theatre/Theatre'
import Kids from '../../components/Kids/Kids'
import Stripe from '../../stripe'


const Home = () => {
  return (
    <>
    <Helmet>
<title>iTicket.AZ — biletlərin onlayn satışı</title>
    </Helmet>
    <Header></Header>
    <Popular></Popular>
    <Turizm></Turizm>
    <Theatre></Theatre>
    <Kids></Kids>
    <Application></Application>
<Stripe></Stripe>
    </>
  )
}

export default Home