import Particles from "react-tsparticles";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <main className="bg-primary text-fontColor font-sans text-base flex-col w-screen box-border">
        <div className="absolute z-0 h-screen w-screen">
          <Particles
            params={{
              particles: {
                number: {
                  value: 120,
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                },
                line_linked: {
                  enable: true,
                  opacity: 0.02,
                },
                move: {
                  direction: "right",
                  speed: 0.08,
                },
                size: {
                  value: 1,
                },
                opacity: {
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                  },
                },
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  push: {
                    particles_nb: 1,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>
        <Header />
        <div className="">{children}</div>
        <Footer />
      </main>
    </>
  );
};
export default Layout;
