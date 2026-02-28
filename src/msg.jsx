export default function Msg({ Name, Colour }) {
  return (
    <div style={{ color: Colour }}>
      <h1>{Name}</h1>
    </div>
  );
}
