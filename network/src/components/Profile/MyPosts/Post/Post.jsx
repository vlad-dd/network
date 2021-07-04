import "../../../../styles/Post.css";

const Post = (props) => {
  return (
    <div>
      <div className="post-item">
      <a href="#"><img className="avatar" src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/737/85/737-85-101X/Lion-Profile-by-Lothare-Dambreville-EyeEm-x-JUNIQE-Poster.jpg"></img></a>
          {props.message}</div>
          <div className="reactions">
              <span><img src="https://image.flaticon.com/icons/png/128/633/633759.png" className="like"></img></span>{props.likes}<span className="space">or</span>
              <span><img src="https://image.flaticon.com/icons/png/128/633/633758.png" className="dislike"></img>{props.dislikes}</span>
              </div>
    </div>
  );
};

export default Post;
