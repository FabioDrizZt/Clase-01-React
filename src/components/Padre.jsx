export default function Padre({ children }) {
  return (
    <div
      style={{
        width: "75%",
        background: "dodgerblue",
        height: "400px",
        padding: "20px",
      }}
    >
      <h5>Soy un padre</h5>
      {children}
    </div>
  );
}
