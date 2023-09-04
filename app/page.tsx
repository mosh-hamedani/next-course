"use client";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [
            { name: "c" },
            { name: "b" },
            { name: "a" },
          ];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
