import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul style={{ display: "flex" }}>
        <li style={{ margin: "20px" }}>
          <Link rel="Home" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link rel="Sobre" href={"/sobre"}>
            Sobre
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
