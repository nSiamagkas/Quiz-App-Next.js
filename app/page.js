import LinkComp from "../components/Link";

const categories = [
  { slug: "history", label: "History" },
  { slug: "math", label: "Math" },
  { slug: "science", label: "Science" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-extrabold text-2xl px-8 mx-10">
      <h1 className="text-7xl font-bold text-center my-8">
        Welcome to the Quiz App <br />
        Pick a subject to start
      </h1>
      <div className="flex gap-8">
        {categories.map((cat) => (
          <LinkComp key={cat.slug} href={`/quizz/${cat.slug}`}>
            {cat.label}
          </LinkComp>
        ))}
      </div>
    </div>
  );
}
