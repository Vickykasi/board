import { useParams } from "react-router-dom";

export default function Board() {
  const {id} = useParams();

  return <div>Board - {id}</div>;
}
