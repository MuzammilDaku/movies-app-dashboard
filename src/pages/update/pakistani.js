import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import axios from 'axios';
const Page = () => {
    const [title,setTitle] = useState('')
    const [img,setImg] = useState('')
    const [id,setId] = useState('')
    useEffect(()=>{
        setTitle(localStorage.getItem('title'))
        setImg(localStorage.getItem('img'))
          setId(localStorage.getItem('id'))
    },[])
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
    const updateData = async() =>{
        await axios.patch(`http://localhost:5000/movies/pakistani-movies/${id}`,{
            title:title,
            img:img,
            id:id
        }).then((res)=>{
            console.log(res.data)
        })
        }
  return (
    <>

        <div className="container row justify-content-center">
        <div className="col-6">
            <h3>Update/Edit Pakistani Movie</h3>
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
                <button type='button' className='btn btn-outline-primary' onClick={updateData}>Update</button>
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

export default Page