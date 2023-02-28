import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      const newPost = response.data;
      const updatedPostsArray = [...posts, newPost];
      setPosts(updatedPostsArray);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleUpdatePost = (id, params, successCallback) => {
    console.log("handleUpdatePost", params);
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return posts;
          }
        })
      );
      successCallback();
      handleHidePost();
    });
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <div className="container"></div>
      <Signup />
      <Login />
      <LogoutLink />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} />
      </Modal>
    </div>
  );
}
