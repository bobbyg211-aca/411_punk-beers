import React, { useState } from "react";
import "./styles.css";

export default function BeerCard(props) {
  const {
    name,
    image_url,
    first_brewed,
    tagline,
    abv,
    description,
    index,
  } = props;
  const [isHidden, setHide] = useState(true);

  return (
    <li class="beer" id={"beer-" + index}>
      <i
        onClick={() => {
          isHidden ? setHide(false) : setHide(true);
        }}
        class={isHidden ? "fa fa-heart-o" : "fa fa-heart"}
      ></i>
      <div class="beer-img">
        <img src={image_url} alt={name}></img>
      </div>
      <div class="beer-info">
        <h3>{name}</h3>
        <h4>{tagline}</h4>
        <p>{description}</p>
        <div class="details">
          <p>
            <strong>ABV:</strong> {abv}
          </p>
          <p>
            <strong>First Brewed:</strong> {first_brewed}
          </p>
        </div>
      </div>
    </li>
  );
}
