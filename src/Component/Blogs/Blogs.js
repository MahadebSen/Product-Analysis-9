import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-left m-5 pt-5'>
                <p className=' font-semibold text-xl '>1. What is Context API?</p>
                <p>The context API is React structure. It enables to share unique details and assists from any levels of your application. It solves the prop drilling part. By it, you can share directly a unique data from grand-parent component to child component. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <hr />
            <div className='text-left m-5'>
                <p className=' font-semibold text-xl '>2. What is Semantic tag?</p>
                <p>In HTML, a semantic element clearly describes its meaning to browser and also to developer. It provides information about the contents of those tags. It goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser. HTML 5 semantic tags define the purpose of the element.</p>

            </div>

        </div>    
    );
};

export default Blogs;