import React from 'react';
import moment from 'moment';

import PostHolder from '../posts/postHolder';

export default function() {
    return (
        <div>
            <h1>Asperger's Blog</h1>
            <h2>A blog for Asperger's</h2>

            <PostHolder />

            {moment().format('YYYY-MM-DD HH:mm:ss')}
        </div>
    );
}