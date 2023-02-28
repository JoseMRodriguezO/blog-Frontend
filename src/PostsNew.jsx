import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="Title" className="form-control" type="text" />
        </div>
        <div>
          Body: <input name="Body" className="form-control" type="text" />
        </div>
        <div>
          Image: <input name="Image" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Send new post
        </button>
      </form>
    </div>
  );
}
