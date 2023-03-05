import images from "../../images";
import Post from "../Post/Post";
import "./Posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      profilePic: images.UserOne,
      name: "White Fantail",
      img: images.UserOne,
      userId: 1,
      desc: "Ethiopian fantail pigeons are fancy birds and they are raised mainly for show, ornamental and exhibition purposes.",
    },
    {
      id: 2,
      profilePic: images.UserTwo,
      name: "Almond Bokhara",
      img: images.UserTwo,
      userId: 2,
      desc: "The Bokhara Trumpeter is a breed of fancy pigeon developed over many years of selective breeding.",
    },
    {
      id: 4,
      profilePic: images.Fantail,
      name: "Diamond Fantail",
      userId: 4,
      desc: "The Fantail is a popular breed of fancy pigeon. It is characterised by a fan-shaped tail composed of 30 to 40 feathers, abnormally more than most members of the dove and pigeon family, which usually have 12 to 14 tail feathers. The breed is thought to have originated in Pakistan, India, China, Japan or Spain.",
    },
    {
      id: 3,
      profilePic: images.UserFour,
      name: "Almond Bokhara",
      img: images.Diamond,
      userId: 3,
      desc: "The Bokhara Trumpeter is a breed of fancy pigeon developed over many years of selective breeding.",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
