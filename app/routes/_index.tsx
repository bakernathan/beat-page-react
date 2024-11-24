import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "THROWS BEAT PAGE" }
  ];
};

export default function Index() {
  return (
      <BeatTile></BeatTile>

  );
}

export function BeatTile() {
  return (
    <div className="container mx-auto bg-violet-200 rounded-lg">
      <p>BeatTile works!</p>
    </div>
  );
}

const resources = [
];
