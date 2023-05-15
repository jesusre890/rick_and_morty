import Card from './Card';


export default function Cards({characters}) {


   return (
      <div> 
         {
            characters.map((i) => 
               <Card
               key= {i.id}
               name={i.name}
               status={i.status}
               specie={i.species}
               gender={i.gender}
               origin={i.origin.name}
               image={i.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            )
         }
      </div>
   );
}
