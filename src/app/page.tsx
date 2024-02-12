import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="max-h-full min-h-screen bg-background text-text ">
      <Navbar />
      <div className="flex justify-end px-20 py-4">
        <input
          type="text"
          className="rounded-lg bg-primary/10 px-2 py-3 outline-none"
        />
      </div>
    </main>
  );
}
