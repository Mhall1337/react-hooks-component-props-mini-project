import React from "react";
import Article from "./Article.js"

function ArticleList({posts}){
    const articles = posts.map(post => Article(post))
    return(
        <main>
            {articles}
        </main>
    )
}
export default ArticleList