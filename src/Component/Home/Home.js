import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../photos/1..png';
import useData from '../Custom Hooks/useData';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useData();
    const newArr = reviews.slice(0,3);
    return (
        <div>
            <div className='flex justify-center items-center mx-8 my-8'>
                <div>
                    <p className='text-7xl font-bold'><q>Without
                    <span className='text-indigo-500'> Music</span>, 
                    <br/> life would be a 
                    <span className='text-rose-600'> mistake</span></q>
                    </p>
                    <p className=' mt-4 font-semibold'>Quoted by - Friedrich Nietzsche</p>
                    <div>
                        <button className='m-9 py-4 px-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-xl'>Live Demo</button>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className=''>
                <p className=' text-5xl'>Customer Reviews (3)</p>
                <div className=' align-middle flex justify-center items-center mx-10 mt-8'>
                    {
                        newArr.map(item => <ReviewCard
                            key={item.id}
                            item={item}
                        ></ReviewCard>)
                    }
                </div>
                <div>
                    <Link to='/reviews'>
                        <button className=" my-5 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-xl">
                        See all Reviews
                        </button> 
                    </Link>  
                </div>
            </div>
        </div>
    );
};

export default Home;