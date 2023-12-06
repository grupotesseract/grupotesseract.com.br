import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
  return (
    <>
      <div className="flex justify-between absolute pl-24 m-8">
        <Logo width={200} height={100} />
      </div>
      <div>
        <Menu />
      </div>
    </>
  );
}
