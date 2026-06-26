function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center content-center gap-5 bg-brand-bg">
      <div className="size-[86px] animate-spin rounded-full border-4 border-white/10 border-r-brand-cyan border-t-brand-purple" />
      <h2 className="text-lg text-brand-muted">Loading Portfolio...</h2>
    </div>
  );
}

export default Loader;
