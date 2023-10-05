import React, { useState } from "react";
import "./Card.css";
import Image from "next/image";
import profile from "./3135715.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UncontrolledExample from "../Carousel/Carousel";

export const Card = () => {
  const [showFullContent, setShowFullContent] = useState("");
  const [readMoreState, setReadMoreState] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const [like, setliked] = useState("unliked");
  const liketoggle = () => {
    setlikeCount(likeCount + 1);
    like === "unliked" ? setliked("liked") : setliked("unliked");
    console.log(likeCount);
  };
  const t = ` CIt's Minority Mental Health Month. Did you know? Well, if not, you
do now. You can thank us later, as we've got something special, and
a little date for your diaries. That date being today, July 26, as
it happens. It's good to talk, let's face it. Life is tough, to say
the least, and someone to talk to can sometimes make all the
difference to your mental health; particularly when that person
knows just what it is you are talking about. Life can be difficult,
we all live with trauma, and your mind can inflict noise and
distress each day. Fortunately, however, there is sisterhood and
fortunately, there is community. So on that basis, we thought we
would celebrate with, well, a talk. A talk more specifically on the
transformative power of sisterhood and community, and an exploration
of the ways Black women connect and grow together. Join
award-winning psychologist, Dr. Joy Harden Bradford, and Dr.
Lakeysha (Key) Hallmon for a conversation on the transformative
power of sisterhood and its importance in community healing, in
celebration of Minority Mental Health Awareness Month. Make sure
don't miss it by securing your place here. There is quite literally
nothing to lose, after all, as this is a free event, live streamed
right here on Tumblr. That's still not all; we thought we'd
celebrate with a few community postings on the evergreen,
ever-essential subject of #therapy. See you at 7pm sharp, folks x
#today on tumblr

#therapy#minority mental health month#mental health#black girl
therapy#coping#mental wellbeing#talking therapy#sisterhood#community

CIt's Minority Mental Health Month. Did you know? Well, if not, you
do now. You can thank us later, as we've got something special, and
a little date for your diaries. That date being today, July 26, as
it happens. It's good to talk, let's face it. Life is tough, to say
the least, and someone to talk to can sometimes make all the
difference to your mental health; particularly when that person
knows just what it is you are talking about. Life can be difficult,
we all live with trauma, and your mind can inflict noise and
distress each day. Fortunately, however, there is sisterhood and
fortunately, there is community. So on that basis, we thought we
would celebrate with, well, a talk. A talk more specifically on the
transformative power of sisterhood and community, and an exploration
of the ways Black women connect and grow together. Join
award-winning psychologist, Dr. Joy Harden Bradford, and Dr.
Lakeysha (Key) Hallmon for a conversation on the transformative
power of sisterhood and its importance in community healing, in
celebration of Minority Mental Health Awareness Month. Make sure
don't miss it by securing your place here. There is quite literally
nothing to lose, after all, as this is a free event, live streamed
right here on Tumblr. That's still not all; we thought we'd
celebrate with a few community postings on the evergreen,
ever-essential subject of #therapy. See you at 7pm sharp, folks x
#today on tumblr

#therapy#minority mental health month#mental health#black girl
therapy#coping#mental wellbeing#talking therapy#sisterhood#community

CIt's Minority Mental Health Month. Did you know? Well, if not, you
do now. You can thank us later, as we've got something special, and
a little date for your diaries. That date being today, July 26, as
it happens. It's good to talk, let's face it. Life is tough, to say
the least, and someone to talk to can sometimes make all the
difference to your mental health; particularly when that person
knows just what it is you are talking about. Life can be difficult,
we all live with trauma, and your mind can inflict noise and
distress each day. Fortunately, however, there is sisterhood and
fortunately, there is community. So on that basis, we thought we
would celebrate with, well, a talk. A talk more specifically on the
transformative power of sisterhood and community, and an exploration
of the ways Black women connect and grow together. Join
award-winning psychologist, Dr. Joy Harden Bradford, and Dr.
Lakeysha (Key) Hallmon for a conversation on the transformative
power of sisterhood and its importance in community healing, in
celebration of Minority Mental Health Awareness Month. Make sure
don't miss it by securing your place here. There is quite literally
nothing to lose, after all, as this is a free event, live streamed
right here on Tumblr. That's still not all; we thought we'd
celebrate with a few community postings on the evergreen,
ever-essential subject of #therapy. See you at 7pm sharp, folks x
#today on tumblr

#therapy#minority mental health month#mental health#black girl
therapy#coping#mental wellbeing#talking therapy#sisterhood#community`;

  const handleRead = () => {
    setReadMoreState(!readMoreState);

    setShowFullContent(t.slice(500));
  };

  return (
    <div class="singelPost">
      <Image src={profile} class="profile" />
      <div class="postCart">
        <h3 class="title">Title of the Blog</h3>
        <div className="carousel-container">
          {" "}
          <UncontrolledExample />
        </div>
        <div class="content">
          <p>
            {!readMoreState && t.slice(0, 500)}{" "}
            {!readMoreState && (
              <span className="read" onClick={handleRead}>
                Read More
              </span>
            )}
            {readMoreState && t.slice(0, 500) + showFullContent}
            {readMoreState && (
              <span className="read" onClick={handleRead}>
                Read Less
              </span>
            )}
          </p>
        </div>
        <div class="details">
          <button class="favorite" onClick={liketoggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              fill={like === "liked" ? "red" : "black"}
            >
              <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z" />
            </svg>
          </button>
          <button class="comment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
            >
              <path d="M240-400h480v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM880-80 720-240H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v740ZM140-300v-520 520Zm606 0 74 80v-600H140v520h606Z" />
            </svg>
          </button>
          <button class="share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
            >
              <path d="M727-80q-47.5 0-80.75-33.346Q613-146.693 613-194.331q0-6.669 1.5-16.312T619-228L316-404q-15 17-37 27.5T234-366q-47.5 0-80.75-33.25T120-480q0-47.5 33.25-80.75T234-594q23 0 44 9t38 26l303-174q-3-7.071-4.5-15.911Q613-757.75 613-766q0-47.5 33.25-80.75T727-880q47.5 0 80.75 33.25T841-766q0 47.5-33.25 80.75T727-652q-23.354 0-44.677-7.5T646-684L343-516q2 8 3.5 18.5t1.5 17.741q0 7.242-1.5 15Q345-457 343-449l303 172q15-14 35-22.5t46-8.5q47.5 0 80.75 33.25T841-194q0 47.5-33.25 80.75T727-80Zm.035-632Q750-712 765.5-727.535q15.5-15.535 15.5-38.5T765.465-804.5q-15.535-15.5-38.5-15.5T688.5-804.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm-493 286Q257-426 272.5-441.535q15.5-15.535 15.5-38.5T272.465-518.5q-15.535-15.5-38.5-15.5T195.5-518.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm493 286Q750-140 765.5-155.535q15.5-15.535 15.5-38.5T765.465-232.5q-15.535-15.5-38.5-15.5T688.5-232.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5ZM727-766ZM234-480Zm493 286Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
