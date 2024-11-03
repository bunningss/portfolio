import Link from "next/link";

export function DataCell({ date, title, description }) {
  return (
    <div className="text-sm flex items-center justify-between">
      <div>
        <Link href="" className="hover:underline block w-fit">
          <h4>goshenpay</h4>
        </Link>
        <span className="text-muted-foreground">
          easy to use payments platform for churches.
        </span>
      </div>
      {date && <span>12/10/2013</span>}
    </div>
  );
}
