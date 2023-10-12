import Fruta from "./Fruta";

export default function Cajon({ frutas }) {
  return (
    <div>
      <h2>Frutas del cajon:</h2>
      <ul>
        {frutas.map((fruta, index) => (
          <Fruta key={index} nombre={fruta} />
        ))}
      </ul>
    </div>
  );
}
