import React, { useContext } from 'react'
import "./Listing.css"
import { IoMdAddCircleOutline } from "react-icons/io";
import { dataContext } from '../../Context/Usercontext';
function Listing() {
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
    <div id='Listing'
    onSubmit={(e)=>{
       e.preventDefault()
      alert("Add Listing Successfully...👍")
      setaddListing(true)
  }}>
        <form action="">
            <span id='listingtitle'>Add Your Listing</span>
            <div className="list">
              <label htmlFor="title">Title</label>
              <input type="text" id='title' required onChange={(e)=>{
                setTitle(e.target.value)
              }}value={title}/>
              </div>
              <div className="list">
              <label htmlFor="des">Description</label>
              <textarea  id="des"></textarea>
              </div>
              <div className="list">
              <label htmlFor="img1">Image1</label>
              <input type="file" id='img1' required onChange={(e)=>{
                setaddImage1(e.target.files[0])
              }}/>
              </div>
              <div className="list">
              <label htmlFor="img2">Image2</label>
              <input type="file" id='img2' required onChange={(e)=>{
                setaddImage2(e.target.files[0])
              }}/>
              </div>
              <div className="list">
              <label htmlFor="img3">Image3</label>
              <input type="file" id='img3' required
              onChange={(e)=>{
                setaddImage3(e.target.files[0])
              }}/>
              </div>
              <div className="list">
              <label htmlFor="price">Price</label>
              <input type="text" id='price' required
              onChange={(e)=>{
                setprice(e.target.value)
              }}value={price}/>
              </div>
              <div className="list">
              <label htmlFor="loc">Location</label>
              <input type="text" id='loc'/>
              </div>
              <button id="listbtn">Add<IoMdAddCircleOutline /></button>
            </form>
            
    </div>
  )
}

export default Listing
