import { currentWorks } from "@/lib/static";
import { DataCell } from "./data-cell";
import { Section } from "./section";

export function CurrentWorks() {
  return (
    <Section title="currently working 💼">
      <div className="mt-2 space-y-2">
        {currentWorks?.map((item, index) => (
          <DataCell key={index} data={item} />
        ))}
      </div>
    </Section>
  );
}
