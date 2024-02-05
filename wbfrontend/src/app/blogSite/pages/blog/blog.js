import Navbar from "../../components/Navbar/Navbar";
import "../../pages/style.css";
import { Card } from "../../components/Card/Card";

function Blog({ isAdmin }) {
  isAdmin = false;
  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <div class="allPost">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Blog;
