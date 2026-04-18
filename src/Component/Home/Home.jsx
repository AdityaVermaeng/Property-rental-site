import React, { useContext } from 'react'
import "./Home.css"

import Card from '../Card/Card'
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import flat from "../../assets/roomhouse.avif"
import flat1 from "../../assets/roomhouse1.avif"
import flat2 from "../../assets/roomhouse3.avif"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain3.avif"
import huthouse from "../../assets/huthouse.jpg"
import huthouse1 from "../../assets/huthouse1.jpg"
import huthouse2 from "../../assets/huthouse2.jpg"
import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import old from "../../assets/old.avif"
import old1 from "../../assets/old2.avif"
import old2 from "../../assets/old3.avif"
import roomnew from "../../assets/roomnew.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import { dataContext } from '../../Context/Usercontext'
function Home() {
   let {
      title,
      setTitle,
      addListing,
      setaddListing,
      addImage1,
      setaddImage1,
      addImage2,
      setaddImage2,
      addImage3,
      setaddImage3,
      price,
      setprice
          }=useContext(dataContext)
  return (
    <div id='home'>
      <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Jhansi"} price={"40,000"}/>
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Farmhouse in Lucknow"} price={"60,000"}/>
      <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK flat in Manali"} price={"60,000"}/>
      <Card image1={flat} image2={flat1} image3={flat2} title={"1BHK Modern Flat in Kanpur"} price={"30,000"}/>
      <Card image1={villa2} image2={villa} image3={villa1} title={"2BHK Modern Villa in Jhansi"} price={"50,000"}/>
      <Card image1={mountain} image2={mountain1} image3={mountain2} title={"1BHK house in manali"} price={"50,000"}/>
      <Card image1={huthouse2} image2={huthouse} image3={huthouse1}  title={"1BHK Hut house in Kasol"} price={"70,000"}/>
      <Card image1={village} image2={village1} image3={village2} title={"2BHK house in Jhansi"} price={"30,000"}/>
      <Card image1={room} image2={room1} image3={room2} title={"1BHK flat in Jhansi"} price={"20,000"}/>
      <Card image1={old} image2={old1} image3={old2} title={"1BHK house in Manali"} price={"40,000"}/>
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"1BHK 2ndfloor in Jhansi"} price={"20,000"}/>
      <Card image1={hut3} image2={hut2} image3={hut1} title={"1BHK house in Goa"} price={"60,000"}/>
      {addListing?<Card image1={URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} image3={URL.createObjectURL(addImage3)} title={title} price={price}/>:""}
    </div>
    
  )
}

export default Home
