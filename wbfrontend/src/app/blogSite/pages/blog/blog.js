import Navbar from "../../components/Navbar/Navbar";
import "../../pages/style.css";
import { Tab } from "../../components/Tab/Tab";
import { Card } from "../../components/Card/Card";

function Blog() {
  return (
    <>
      <Navbar />
      <Tab />
      <div class="allPost">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Blog;
