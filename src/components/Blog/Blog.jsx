// props type install here
import PropTypes from 'prop-types';
// declared a props
const Blog = ({ blog }) => {
    // destructuring items here

    const { title } = blog;

    console.log(blog);
    return (
        <div>
            <h2 className='text-4xl'>{title}</h2>
        </div>
    );
};
// props type use here
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;