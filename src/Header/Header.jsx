import profile from '../../Assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h3 className='text-2xl font-bold'>Sharp Your Knowledge</h3>
            <img src={profile} alt="" />
        </header >
    );
};

export default Header;