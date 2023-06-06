import Card from "../card/Card";
// import styles from './Cards.module.css'

export default function Cards({ characters, onClose }) {
  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };

  return (
    <div style={cardsContainer}>
      {characters.map((i) => (
        <Card
          key={i.id}
          id={i.id}
          name={i.name}
          status={i.status}
          specie={i.species}
          gender={i.gender}
          origin={i.origin.name}
          image={i.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
