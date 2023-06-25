import Head from 'next/head';
import Link from 'next/link';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
const Page = () => {
  return (
    <>
      <Head>
        <title>
          Delete Movie| Movies App
        </title>
      </Head>
     <div className="container px-4 mt-2 "  >
      <div className="form mx-4">
      <h2>Delete A Movie</h2>
       {/* <p>In Which Category You Want To Add a Movie?</p> */}
       <Link href='/delete-indian-movie'>
        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}> Indian Movie</button>
       </Link>
       <Link href={'/delete-south-movie'}>

        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}> South Indian Movie</button>
       </Link>
       <Link href={'/delete-hollywood-movie'}>

        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}> Hollywood Movie</button>
       </Link>
       <Link href={'/delete-pakistani-movie'}>

        <button className='btn btn-outline-primary mx-3 my-2'  style={{
          height:'6rem',
          width:'205px'
        }}> Pakistani Movie</button>
       </Link>
       
        
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
