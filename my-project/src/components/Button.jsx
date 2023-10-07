function Button({ children }) {
  return (
    <button className="bg-yellow p-3 h-[53px] font-space-mono text-white">
      {children}
    </button>
  );
}

export default Button;
