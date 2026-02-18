export function PageBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" 
      style={{
        backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }}
    />
  );
}
