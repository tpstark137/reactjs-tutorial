import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ])
    // const [blogs,setBlogs]=useState(null);
    const [name,setName]=useState('mario');
    // const [isPending,setPending]=useState(true);
    // const [error,setError]=useState(null);
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    // const handleDelete=(id)=>{
    //     const newBlog=blogs.filter(blog=>blog.id !== id)
    //     setBlogs(newBlog)
    //   }
      // useEffect(()=>{
      //   // console.log("UseEffect Called")
      //   // console.log(blogs)
      //   setTimeout(()=>{
      //   fetch('http://localhost:8000/blogs')
      //    .then(res=>{
      //     if(!res.ok){
      //       throw Error('Could not fetch the data for that resource')
      //     }
      //       //this passes json into javascript object for us
      //       // this is asynchronous- takes some time
      //       // this whole thing will again returns promise
      //    })
      //    .then((data)=>{
      //       setBlogs(data)
      //       setPending(false)
      //       setError(null)
      //   })
      //   .catch(err=>{
      //     setPending(false)
      //     setError(err.message)
      //     console.log(err.message)
      //   });
      //   },1000)
      // },[])
      //dependency kept empty- renders initially
    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {/*initially when our blogs is empty the below component is running for null data , so that's why we put condition otherwise error:map null */}
        {/* blogs && <BlogList blogs={blogs} title={"All Blogs !"} handleDelete={handleDelete}/>*/}
        {isPending && <div>Loading...</div>}
        { blogs && <BlogList blogs={blogs} title={"All Blogs !"} />}
        { /* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title={"Mario's Blog"} handleDelete={handleDelete} /> */}
        <button onClick={()=>setName('luis')}>Change Name</button>
        <p>{name}</p>
        </div>
     );
}
 
export default Home;

{/* dummy server for testing (json server): npx json-server --watch data/db.json --port 8000 */}