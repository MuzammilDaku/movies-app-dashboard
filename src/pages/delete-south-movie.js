import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
const Page = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
        await  axios.get('http://localhost:5000/movies/south-movies').then((res)=>{
            setData(res.data)
        })
        }
        fetchData()
    },[])
    const handleDel = async(id)=>{
        //  console.log(id)
        const _id = id
        try{
         if(confirm('are you sure ?')==true){
        await axios.delete(`http://localhost:5000/movies/south-movies/${_id}`).then((res)=>{
          console.log(res.data)
        })
         }else{
          null
         }
        }catch(e){

        }
    }
  return (
    <>
      <Head>
        <title>
          Delete Movie| Movies App
        </title>
      </Head>
     <div className="container mt-2 row justify-content-center"  >
      {
        data?.map((e,index)=>{
          return(
            <>
            <div key={e._id}>
            <div className="col-12 my-3">
              <div className="row" style={{
                border:'1px solid red',
                boxShadow:'2px 2px 4px red'
              }}>
                <div className="col-3 ">
                  <img src={e.img}  style={{
                    height:'15rem',
                    // width:'100%'
                  }} alt="Image" />
                </div>
                <div className="col-4 align-self-center">
                  <h3>{e.title}</h3>
                </div>
                <div className="col-4 align-self-center d-grid">
                  <button className='btn btn-outline-danger' onClick={()=>handleDel(e._id)}>Delete</button>
                </div>
              </div>
            </div>
              {/* <h1>{e.title}</h1> */}
            </div>
            </>
          )
        })
      }
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
