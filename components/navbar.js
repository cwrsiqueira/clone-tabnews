import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul style={{ display: "flex" }}>
        <li style={{ margin: "20px", listStyle: "none" }}>
          <Link style={{ textDecoration: "none" }} rel="Home" href={"/"}>
            Home
          </Link>
        </li>
        <li style={{ margin: "20px", listStyle: "none" }}>
          <Link style={{ textDecoration: "none" }} rel="Sobre" href={"/sobre"}>
            Sobre
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;