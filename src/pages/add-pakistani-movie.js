import axios from 'axios';
import React, { useState } from 'react'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => {
    const [title,setTitle] = useState('')
    const [img,setImg] = useState('')
    const converToBase64 = (e)=>{
        console.log(e)
        const reader = new FileReader
        reader.readAsDataURL(e.target.files[0])
        reader.onload= ()=>{
            console.log(reader.result)
            setImg(reader.result)
        }
        reader.onerror = (e)=>{
            console.log(`error`,e)
        }
    }
    const sendData = async() =>{
    await axios.post('http://localhost:5000/movies/pakistani-movies',{
        title:title,
        img:img
    }).then((res)=>{
        console.log(res)
    })
    }
  return (
    <>
    <div className="container row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-9 col-sm-10 col-12">
            <h3>Add Pakistani Movie</h3>
            <form>
             <div className="input-fields my-2">
                <label>Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='form-control' placeholder='Title' />
             </div>
             <div className="input-fields my-2">
                <label>Poster/Image</label>
                <input type="file" onChange={converToBase64} className='form-control'  />
                {/* Preview Of Image Which You are Sending */}
                <div className='text-center my-4'>               
                {
                    img == ''|| img ==null ? '' :  <img src={img} alt="Preview Of Image" height={100} width={100} />
                }
                </div>
               
             </div>
             <div className="d-grid my-3">
                <button className='btn btn-outline-primary' onClick={sendData}>Add</button>
             </div>
            </form>
        </div>
    </div>
    </>
  )
}
Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Page;