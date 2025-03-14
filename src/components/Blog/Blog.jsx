// props type install here
import PropTypes from 'prop-types';
// declared a props
const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <div>

        </div>
    );
};
// props type use here
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;