import { DataCell } from "./data-cell";
import { Section } from "./section";

export function CurrentWorks() {
  return (
    <Section title="currently working 💼">
      <div className="mt-2 space-y-2">
        <DataCell />
        <DataCell />
      </div>
    </Section>
  );
}
