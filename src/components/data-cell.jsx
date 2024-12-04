export function DataCell({ date, data }) {
  return (
    <div className="text-sm flex items-center justify-between">
      <div>
        <a
          href={data?.link}
          target="_blank"
          className="hover:underline block w-fit"
        >
          <h4>{data?.title}</h4>
        </a>
        <span className="text-muted-foreground">{data?.description}</span>
      </div>
      {date && <span>12/10/2013</span>}
    </div>
  );
}
