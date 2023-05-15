export default function Card({name, status, specie, gender, origin, image, onClose}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{specie}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt=''/>
      </div>
   );
}
