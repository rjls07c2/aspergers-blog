import React from 'react';

const BlogSidebarList = props => {
    const blogList = props.data.map(blogItem => {
        return (
            <div>
                <h1>{blogItem.title}</h1>
                <h2>{blogItem.desc}</h2>
                <p>{blogItem.id}</p>
                <h4>{blogItem.category}</h4>
                <p>{blogItem.text}</p>
            </div>
        );
    });

    return <div>{blogList}</div>
};

export default BlogSidebarList;