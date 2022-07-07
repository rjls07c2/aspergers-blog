import React from 'react';

const BlogSidebarList = props => {
    const blogList = props.data.map(blogItem => {
        return (
            <div>
                <h1>{blogItem.name}</h1>
                <h2>{blogItem.id}</h2>
            </div>
        );
    });

    return <div>{blogList}</div>
};

export default BlogSidebarList;