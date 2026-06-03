"use client";

export default function RightPanel() {
  return (
    <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[url('/images/background-gui-macedo-2-opt.jpg')] bg-cover bg-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(255,240,235,0) 0%, rgba(220,190,185,0.12) 100%)",
        }}
      />
    </div>
  );
}
