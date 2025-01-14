import GrandParent from "./GrandParent";

function Child({ data }) {
  return (
    <>
      <h2>Child component</h2>
      <GrandParent data={data} />
    </>
  );
}

export default Child;
