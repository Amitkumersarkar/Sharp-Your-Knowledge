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
        <div>

        </div>
    );
};

export default Blogs;