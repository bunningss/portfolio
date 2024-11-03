import { Section } from "./section";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <Section title="services 🛠️">
      <div className="grid sm:grid-cols-2 gap-2">
        <ServiceCard />
        <ServiceCard />
      </div>
    </Section>
  );
}
