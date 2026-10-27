import { steps } from "@/data/steps";

export default function Steps() {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title}>
          <div className="font-serif text-5xl text-mocha">{i + 1}</div>
          <h3 className="mb-1.5 mt-1 font-medium">{s.title}</h3>
          <p className="text-[15px] leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
