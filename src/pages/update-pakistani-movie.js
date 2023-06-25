import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useRouter } from 'next/router';
// import { title } from 'process';
const Page = () => {
    const router = useRouter()
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
        await  axios.get('http://localhost:5000/movies/pakistani-movies').then((res)=>{
            setData(res.data)
        })
        }
        fetchData()
    },[])
    const handleEdit = async(id,title,img)=>{
        localStorage.setItem('id',id)
        localStorage.setItem('title',title)
        localStorage.setItem('img',img)
       router.push(`/update/pakistani`)
    }
  return (
    <>
      <Head>
        <title>
          Update Movie| Movies App
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
                border:'1px solid #e040fb	',
                borderRadius:'12px',
                boxShadow:'2px 2px 4px #e040fb	'
              }}>
                <div className="col-3 ">
                  <img src={e.img}  style={{
                    height:'15rem',
                    width:'11rem'
                  }} alt="Image" />
                </div>
                <div className="col-4 align-self-center">
                  <h3>{e.title}</h3>
                </div>
                <div className="col-4 align-self-center d-grid">
                    {/* <Link href={'/movies/'}></Link> */}
                  <button className='btn btn-outline-info' onClick={()=>handleEdit(e._id,e.title,e.img)}>Edit</button>
                </div>
              </div>
            </div>
              
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
