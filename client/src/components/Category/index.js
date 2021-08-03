import React, { useEffect, useState } from "react";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import { Carousel } from "react-bootstrap";
import image from "../../images/";
import "./category.css";
function Category() {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const [categoryData, setCategory] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data);
      setCategory(data);
    }
  }, [data, categoryData]);
  return (
    <div>
      {loading && <h2>loading</h2>}
      {data
        ? data.categories.map((category) => (
            <div className="category-list" key={category._id}>
              {category.name}
            </div>
          ))
        : null}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Category;
