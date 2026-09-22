type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl min-w-0 ${className}`}
      style={{
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {children}
    </div>
  );
}

