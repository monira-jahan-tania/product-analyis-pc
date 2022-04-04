import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="blog-1">
                <h1>What is Context API?</h1>
                <p>Context API declares a global variable which can be use in all the Routes. It is mostly similar to props drilling. The main difference is that context API sends unique variables in the Routes. Here, the provider component provides the states and consumer component uses the state.</p>
            </div>
            <div className="blog-2">
                <h1>What is Semantic Tag?</h1>
                <p>Semantic tag means the tags which has its meaning about its content or its details. Semantic tags are basically used in HTML. For example: if we see that 'article', details, etc are the semantic tags which describe its meaning ie. why we use this tag for in our applications. On the other hand, div tag does not give us details information why it is used for. </p>

            </div>
            <div className="blog-3">
                <h1>Differences between inline, block and inline-block elements:</h1>
                <p></p>

            </div>
        </div>
    );
};

export default Blogs;