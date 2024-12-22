const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-p">Вселенная: {props.universe}</p>
        <p className="card-p">Альтер Эго: {props.alterego}</p>
        <p className="card-p">Род деятельности: {props.occupation}</p>
        <p className="card-p">Друзья: {props.friends}</p>
        <p className="card-p">Суперсилы: {props.superpowers}</p>
        <div className="card-img">
          <img src={props.url} alt={props.name} />
        </div>
        <p className="card-info">{props.info}</p>
        <div className="rating">
          <input type="checkbox" id="star-5" name="rating" value="5" />
          <label htmlFor="star-5" title="Оценка '5'">
            &#9733;
          </label>

          <input type="checkbox" id="star-4" name="rating" value="4" />
          <label htmlFor="star-4" title="Оценка '4'">
            &#9733;
          </label>

          <input type="checkbox" id="star-3" name="rating" value="3" />
          <label htmlFor="star-3" title="Оценка '3'">
            &#9733;
          </label>

          <input type="checkbox" id="star-2" name="rating" value="2" />
          <label htmlFor="star-2" title="Оценка '2'">
            &#9733;
          </label>

          <input type="checkbox" id="star-1" name="rating" value="1" />
          <label htmlFor="star-1" title="Оценка '1'"></label>
        </div>
      </div>
    </div>
  );
};

export default Card;
