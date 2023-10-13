function Button({ children }) {
  return (
    <button className="bg-yellow transition duration-500 p-3 h-[53px] w-[180px]  font-space-mono text-white hover:text-yellow hover:bg-transparent hover:border-2 hover:border-yellow">
      <span>{children}</span>
    </button>
  );
}

export default Button;
