type DetailsHeaderProps = {
  children: string;
};

function DetailsHeader({ children }: DetailsHeaderProps) {
  return (
    <header className="p-8 pt-16">
      <h3 className="text-[2rem] font-bold">{children}</h3>
    </header>
  );
}

export default DetailsHeader;
