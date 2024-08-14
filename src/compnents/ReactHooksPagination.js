import { getPostsPage } from "../apis/axios"
import { useState, useEffect } from "react"
import Posts from "./Posts"

const ReactHooksPagination = () => {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        
        getPostsPage(page).then(json => setPosts(json))

    },[page])

    const content = posts?.map((post, index)=> { return <Posts key = {index} post={post}/>})
    const nextPage = () => { setPage(prev => prev + 1)}
    const prevPage = () => { setPage(prev => prev - 1)}

    const noData =  !posts.length ? "No Data To Display" : content


   return (
    <>
        <nav>
            <button onClick={prevPage} disabled={page === 1}>Prev Page</button>
            <button onClick={nextPage} disabled={!posts.length}>Next Page</button>
        </nav>
    {noData}
   </>
  )
}

export default ReactHooksPagination;
