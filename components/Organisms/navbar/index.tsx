import Image from "next/image";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-br/and" href="#">
            <Image
              src="assets/icon/logo.svg"
              alt={"logo"}
              width={60}
              height={60}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title={"Home"} active url="/" />
              <Menu title={"Games"} url="/games" />
              <Menu title={"Reward"} url="/reward" />
              <Menu title={"Discover"} url="/discover" />
              <Menu title={"Global Rank"} url="/global-rank" />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
