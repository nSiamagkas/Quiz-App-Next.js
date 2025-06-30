export function Button({ selected, onClick, children }) {
  return (
    <button
      onClick={onClick}
      disabled={selected === null}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
    >
      {children}
    </button>
  );
}
