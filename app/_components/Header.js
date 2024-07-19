import ThemeSwitch from "@/app/_components/ThemeSwitch";

function Header() {
  return (
    <header className="shadow-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-7 py-4 dark:bg-blue dark:text-white">
        <h1 className="text-xl font-bold sm:text-2xl">Where in the world?</h1>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
