export default async function SSRPage() {
  const res = await fetch("", { cache: "no-store" });
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>Server-Side Rendering</h1>
      <p>SSR</p>
    </div>
  );
}
