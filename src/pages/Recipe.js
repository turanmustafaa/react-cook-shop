import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Recipe() {
  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <FlexDiv>
        <Info>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </Info>
        {activeTab === "instructions" && (
          <div style={{ marginLeft: 20 }}>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              style={{ marginLeft: 20 }}
            ></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}> {ingredient.original}</li>;
            })}
          </ul>
        )}
      </FlexDiv>
    </DetailWrapper>
  );
}
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;

  ol {
    margin-top: 2rem;
    li {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
`;
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  ul {
    list-style-type: none;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem9;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  height: fit-content;
  cursor: pointer;
  width: 100%;
`;
const Info = styled.div`
  margin-left: 2rem;
  display: inline-flex;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
`;

export default Recipe;
