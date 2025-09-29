import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setEmail("");
    alert("Subscribed! (placeholder)");
  };

  return (
    <form onSubmit={submit} className="flex w-full max-w-md items-center gap-2">
      <input
        required
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-11 rounded-full border px-4"
        aria-label="Email address"
      />
      <Button type="submit" disabled={loading} className="rounded-full bg-primary hover:bg-primary/90">
        {loading ? "..." : "Subscribe"}
      </Button>
    </form>
  );
}
