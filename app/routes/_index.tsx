import type { MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";
import { BeatTileList } from "./beat";

export const meta: MetaFunction = () => {
  return [
    { title: "THROWS BEAT PAGE" }
  ];
};

export default function Index() {
  return (
    <>
      <NavBar></NavBar>
      <BeatTileList></BeatTileList>
    </>
  );
}
