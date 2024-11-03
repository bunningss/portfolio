import { Title } from "./title";

export function Section({ children, title }) {
  return (
    <section className="my-4">
      {title && <Title>{title}</Title>}
      <div className={`${title ? "mt-2" : ""}`}>{children}</div>
    </section>
  );
}
