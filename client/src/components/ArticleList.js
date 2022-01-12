import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import SideBar from "./SideBar";
const ArticleList = ({submitted, setSubmitted}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get("/articles")
            .then((res) => {
                console.log(res);
                setArticles(res.data);
            })
            .catch((err) => console.log(err));
    }, [submitted]);

    const deleteArticle = (id) => {
        axios.delete(`/articles/delete/${id}`)
        .then(res => {
            console.log(res);
            setSubmitted(!submitted)})
        .catch(err => console.log(err))
        
}

console.log(articles)
    return (
    <div className="relative min-h-screen md:flex">

        <div className="flex-1 p-10 mb-400">
                <h2 className="text-3xl font-bold bg-tahiti-500 text-midnight mb-4">Travel Blog Posts</h2>
                    { articles ? 
                    articles.map((x, i) => {
                        return (
                            <div key={i} className="media content-section m-2">
                                            
                                        <div className="flex flex-col items-center justify-center article-metadata bg-steel">
                                            <h2>{ x.title }</h2>
                                            <div className="flex flex-row items-center justify-center">
                                                <p>Posted by: <a  className="text-white" href={`/bloggers/view/${x.blogger_id}`}>{ x.first_name }</a> o</p>
                                                <p className="text-muted">n { x.created_at }</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row pl-14 bg-midnight text-white">
                                            <div className="flex flex-row items-center justify-center m-auto">
                                                <p>{ x.body }</p>
                                            </div>
                                            <div className="flex flex-col items-end justify-end pr-4">
                                                <Link to={`/articles/view/${x.id}`}>View</Link>
                                                <Link to={`/articles/edit/${x.id}`}>Edit</Link>
                                                <button onClick={() => deleteArticle(x.id)}>Delete</button>

                                            </div>
                                        </div>

                                </div>);
                    }):
                    null
                }

        </div>

        <SideBar />
    </div>
    );
};

export default ArticleList;