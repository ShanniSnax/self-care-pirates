import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostCardFull from './../../components/PostCardFull/PostCardFull';
import CategoryWidget from './../../components/CategoryWidget/CategoryWidget';
import CategoryMobile from './../../components/CategoryMobile/CategoryMobile';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from '../../components/BackToTop/BackToTop';
import './PostPage.css';
import OtherWidgets from '../../components/OtherWidgets/OtherWidgets';
import MakeComment from '../../components/MakeComment/MakeComment';
import Comments from '../../components/Comments/Comments';
import API from '../../utils/Api';

const fakeData = [
  {
    date: 'October 10, 1992',
    username: 'shannisnax',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aperiam ut! Voluptate et accusantium natus a omnis at odio fuga perferendis nulla similique recusandae dolor dolore placeat aspernatur nostrum, quisquam molestiae repellat, nemo laboriosam. Reprehenderit debitis hic dolorum, possimus veniam eligendi, optio saepe reiciendis sed exercitationem inventore voluptas quas sequi ipsa dolor excepturi est aliquam odio ex enim repudiandae eius quos? Iste nemo cum harum vitae aspernatur perferendis maiores minus esse quidem, recusandae saepe repellat. Molestiae quos doloribus ad natus nemo expedita quidem necessitatibus aperiam sed reprehenderit laboriosam odit rem iure eveniet commodi dolores tempore, distinctio odio corporis minus eligendi nostrum corrupti! Non nulla placeat dicta cumque ea velit sed? Reiciendis quidem corrupti, ratione sed aspernatur inventore deserunt voluptates dolore nulla ea quo tempora amet modi possimus ipsa nemo blanditiis omnis? Ipsum dolores autem dolore aperiam voluptate nesciunt eveniet, earum commodi rem quasi. Distinctio, maiores dolore sit quo cum quos ex nobis repellendus ea laboriosam necessitatibus atque libero eaque voluptatibus vitae cupiditate officiis assumenda expedita deleniti saepe doloremque quaerat asperiores incidunt. Saepe, et quaerat. Ea cupiditate vel quisquam fuga repellendus accusamus. Voluptatibus iste similique adipisci sint aperiam illo quam ratione voluptas sapiente perspiciatis, cum nesciunt, quia facilis quidem aut.",
    title: 'OMG Skin Care',
    id: 1
  }
]

const fakeCommentData = [
  {
    commentDate: 'October 10, 1992',
    commentUsername: 'cconverse',
    commentBody: "This post is so wrong i would never listen to this.",
    commentId: 1
  },
  {
    commentDate: 'October 10, 1992',
    commentUsername: 'tamtam',
    commentBody: "This is actually dangerous to recommend. You should be banned!!!!",
    commentId: 2
  },
  {
    commentDate: 'January 10, 2020',
    commentUsername: 'layingdownthelawrence',
    commentBody: "Wow clearly this comments section has no idea whats going on. This is phenomenal advice and has helped me tremendously. Can't expect much from comments from 92!!",
    commentId: 3
  }
]

const PostPage = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState();

  useEffect(() => {
    getPost(postId);
  }, []);

  const getPost = async (id) => {
    const res = await API.getSinglePost(id);
    setPostData(res.data);
  };

  if(!postData) return <h1>Loading...</h1>
  // This postData will have everything you need to finish the front-end
  // Since I'm not speaking use the note at the top!!!!!!
  console.log(postData)

  return (
    <Container fluid className="forum-container">
      <Row>

        {/* left side widgets */}
        <Col xs={2} sm={12} lg={2}>
          <Row>
            <Col xs={12} className="category-desktop">
              <CategoryWidget />
            </Col>
            <Col xs={12} className="category-mobile">
              <CategoryMobile />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <OtherWidgets />
            </Col>
          </Row>
        </Col>

        {/* truncated posts */}
        <Col xs={8} sm={12} lg={8}>
            {fakeData.map(({ title, body, username, date, id}) => (
            <Row>
            <Col xs={12}>
              <PostCardFull 
                id={id}
                key={id}
                title={title} 
                date={date} 
                username={username} 
                body={body} 
             />
            </Col>
            </Row>
          ))}

            {fakeCommentData.map(({ commentBody, commentUsername, commentDate, commentId}) => (
            <Row>
             <Col xs={12}>
              <Comments
                key={commentId} 
                commentId={commentId}
                commentDate={commentDate}
                commentUsername={commentUsername}
                commentBody={commentBody}
              />
             </Col>
            </Row>
          ))}

            <Row>
             <Col xs={12}>
              <MakeComment />
             </Col>
            </Row>
        </Col>

        {/* right side widgets */}
        <Col xs={2} sm={12} lg={2}>
          <Row>
            <Col xs={12}>
              <OtherWidgets />
            </Col>
          </Row>
        </Col>

      </Row>

    <BackToTop />
  
  </Container>
)};

export default PostPage;
