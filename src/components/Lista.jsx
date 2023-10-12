export default function Lista({ datos }) {
  console.log(datos);
  return (
    <ul>
      {datos.map((numero) => (
        <li key={numero}>{numero}</li>
      ))}
    </ul>
  );
}
