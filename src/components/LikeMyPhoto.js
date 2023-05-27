import { useState } from "react";
import { Title } from "./Title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Like from "../assets/dog.jpg";

export const LikeMyPhoto = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <Container className="text-center">
      <Title
        title="Double Click To Like My Photo"
        subtitle={`Likes: ${count}`}
      />

      <Card className="bg-dark m-auto text-white" style={{ width: 300 }}>
        <div className="card-header ">
          <AiFillGithub className="fs-2" />
          <small>DoggyDog</small>
        </div>
        <img src={Like} alt="doggyimage" style={{ height: "fit-content" }} />

        <div
          className="card_footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          {like ? (
            <AiFillHeart className="text-danger fs-2" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} className="fs-2" />
          )}
        </div>
      </Card>
    </Container>
  );
};
