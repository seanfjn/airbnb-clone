'use client';

// Interface is an object in which this case holds the property children.
// ReactNode can hold any value which will get collected in Navbar
interface ContainerProps{
    children: React.ReactNode;
}

// This is the same as "const Container = () => {}" in react
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">{children}</div>
  );
}

export default Container