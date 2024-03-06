import Test from "./Test";
import "./Post.css";
import "./Box1.css";
import "./Box2.css";
import "./Box3.css";

import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";

export default function Post() {
  return (
    <div className="Post">
      Post
      <Test />
      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  );
}
