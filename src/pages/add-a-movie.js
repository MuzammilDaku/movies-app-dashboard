import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
const Page = () => {
  const [title,setTitle] = useState('')
  const [img,setImg] = useState('')

  const handleFileChange = (e)=>{
   const reader = new FileReader()
   reader.readAsDataURL(e.target.files[0])
   reader.onload=()=>{
   console.log(reader.result)
   setImg(String(reader.result))
  }
  reader.onerror = (e)=>{
    console.log('Error ',e)
  }
   console.log(e.target.files)
  }
  const sendData = async()=>{
    await axios.post('http://localhost:5000/movies/indian-movies',{
      title:title,
      img:img
    }).then((res)=>console.log(res.data)).catch((e)=>{
      console.log('error',e)
    })
  }
  return (
    <>
      <Head>
        <title>
          Add Movie| Movies App
        </title>
      </Head>
     <div className="container mt-2 px-4"  >
      <div className="form px-4">
      <h2>Add A Movie</h2>
       <p>In Which Category You Want To Add a Movie?</p>
       <Link href='/add-indian-movie'>
        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}>Add Indian Movie</button>
       </Link>
       <Link href={'/add-south-movie'}>

        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}>Add South Indian Movie</button>
       </Link>
       <Link href={'/add-hollywood-movie'}>

        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}>Add Hollywood Movie</button>
       </Link>
       <Link href={'/add-pakistani-movie'}>

        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}>Add Pakistani Movie</button>
       </Link>
       
        {/* <form>
          <div className="input-fields">
            <label htmlFor="">Movie Name</label>
            <input type="text"  onChange={(e)=>setTitle(e.target.value)} className='form-control my-2' placeholder='Movie Title' required/>
          </div>
          <div className="input-fields">
            <label className='form-label'>Upload Image/Poster</label>
            <input type="file"  onChange={handleFileChange} className='form-control'  required />
            <div className='text-center my-3'>

            {img == ''|| img == null?"":  <img src= {img} height={100} width={100}/>}
            </div>
           
          </div>
          <div className="d-grid my-3">
            <button type='button' onClick={()=>sendData()}  className='btn btn-outline-primary'>Add Movie</button>
          </div>
        </form> */}
      </div>
     </div>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
