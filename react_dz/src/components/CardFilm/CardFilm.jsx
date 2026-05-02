import "./CardFilm.css";

function CardFilm({ estimation, image, title }) {
  return (
    <div className="container-card">
      <div className="card-film">
        <div className="estimation">
          <img src="./src/picture/star.svg" alt="star" />
          <p>{estimation}</p>
        </div>
        <div className="img-container">
          <img className="poster" src={image} alt={title} />
        </div>

        <p className="title-film">{title}</p>
        <button className="favourites-film">
          <img src="./src/picture/like.svg" alt="like" />
          <p className="btn-text">В избранное</p>
        </button>
      </div>
    </div>
  );
}

export default CardFilm;
