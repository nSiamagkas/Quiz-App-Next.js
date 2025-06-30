import Link from "next/link";

export default function LinkComp({ href, children }) {
  return (
    <Link
      href={href}
      className="flex flex-wrap items-center gap-2 md:flex-row px-2.5 py-2 rounded-full bg-neutral-300/20 hover:bg-neutral-300/30 backdrop-blur-[1px] border border-neutral-400/20 text-5xl uppercase
"
    >
      {children}
    </Link>
  );
}
