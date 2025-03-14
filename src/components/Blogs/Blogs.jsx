import { useEffect } from "react";
import { useState } from "react";

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
        </div>
    );
};

export default Blogs;