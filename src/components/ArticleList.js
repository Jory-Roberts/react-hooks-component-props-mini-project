import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
    return (
        <div>
            <main>
                {posts.map((post) => {
                    return (
                        <Article
                            key={post.id}
                            date={post.date}
                            preview={post.preview}
                        ></Article>
                    );
                })}
            </main>
        </div>
    );
};

export default ArticleList;
