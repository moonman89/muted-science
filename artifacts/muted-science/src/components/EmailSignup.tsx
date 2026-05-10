import { useState } from "react";

type Stage = "idle" | "loading" | "success" | "error";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [stage, setStage] = useState<Stage>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !consent) return;

    setStage("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/email-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), consent: true }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStage("success");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStage("error");
    }
  }

  return (
    <div className="border-t border-white/20 p-2.5">
      <p className="text-white/35 mb-2 leading-none text-[9px] uppercase tracking-widest">Signal List</p>

      {stage === "success" ? (
        <p className="text-white/60 text-[9px] uppercase tracking-widest leading-relaxed">
          Confirmed — you are on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={stage === "loading"}
            className="w-full bg-transparent border border-white/20 px-2 py-1.5 text-[9px] text-white placeholder-white/20 outline-none focus:border-white/50 disabled:opacity-40 font-mono uppercase tracking-widest"
          />

          <label className="flex items-start gap-2 cursor-pointer group">
            <div
              className="relative mt-0.5 flex-shrink-0 w-3 h-3 border border-white/30 group-hover:border-white/60 cursor-pointer"
              onClick={() => setConsent(!consent)}
            >
              {consent && (
                <div className="absolute inset-0.5 bg-white" />
              )}
            </div>
            <span
              className="text-[8px] uppercase tracking-widest text-white/30 leading-relaxed cursor-pointer select-none"
              onClick={() => setConsent(!consent)}
            >
              I agree to receive occasional updates and releases from Muted Science.
            </span>
          </label>

          {stage === "error" && (
            <p className="text-white/40 text-[8px] uppercase tracking-widest leading-tight">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={stage === "loading" || !email.trim() || !consent}
            className="w-full border border-white/20 py-1.5 text-[8px] uppercase tracking-widest text-white/60 hover:text-white hover:border-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            {stage === "loading" ? "Sending..." : "Join"}
          </button>
        </form>
      )}
    </div>
  );
}
