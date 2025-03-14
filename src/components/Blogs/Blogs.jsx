import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    // loading blogs data here
    // hold data
    const [blogs, setBlogs] = useState([]);

    // load data 
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl ">Blogs : {blogs.length}</h1>
            {/* dynamic items to show all */}
            {
                blogs.map(blog =>
                    <Blog key={blog.id} blog={blog}>

                    </Blog>)
            }

        </div>
    );
};

export default Blogs;