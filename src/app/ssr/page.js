export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const res = await fetch("", { cache: "no-store" });
  const data = await res.json();

  return (
    <div>
      <h1>Server-Side Rendering</h1>
      <p>
        {data.content} && {data.author}
      </p>
    </div>
  );
}
