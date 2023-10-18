//import PostCard from "../../components/PostCard";
import PostCard from "@/components/PostCard";
import "./Posts.css";

// Ejecucion de la peticion
async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  /*   await new Promise((resolve) => setTimeout(resolve, 3000)); */
  return data;
}

// RSC
export default async function PostPage() {
  const posts = await loadPost();
  //console.log(posts);
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
