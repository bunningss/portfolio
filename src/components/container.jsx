export function Container({ children }) {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-sm w-full p-2">{children}</div>
    </div>
  );
}
