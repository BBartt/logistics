import { useState, useEffect } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { motion, useAnimation } from "framer-motion";
import { Link, NavLink, Outlet, Router } from "react-router-dom";
import Header from "../Header";

function Sidebar() {
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const showMore = () => {
    controls.start({
      width: "250px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      width: "55px",
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: "none",
    });

    controlTitleText.start({
      opacity: 0,
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="sidebar">
          <motion.div
            animate={controls}
            className="max-w-[250px] animate duration-300 border-r border-gray-700 relative flex flex-col py-10  group"
          >
            {/* min-h-screen */}
            <div className="grow">
              <ul class="apps-list vertical" height="auto">
                <li>
                  <motion.div animate={controlTitleText} className="name">
                    apps
                    {/* <NavLink to="/">Home</NavLink> */}
                  </motion.div>
                </li>

                <li>
                  <div>
                    <span>
                      <span>
                        <p color="rgb(139, 111, 32)">P</p>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      <Link to="/planner">Planner</Link>
                    </motion.div>
                  </div>
                </li>

                <li>
                  <div>
                    <span>
                      <span>
                        <p color="rgb(30, 104, 177)">O</p>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      <Link to="/orders">Orders</Link>
                    </motion.div>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <span>
                        <p color="rgb(45, 126, 88)">F</p>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      <Link to="/fleet">Fleet</Link>
                    </motion.div>
                  </div>
                </li>
              </ul>

              <ul class="general-list vertical" height="auto">
                <li>
                  <motion.div animate={controlTitleText} className="name">
                    <Link to="/general">General</Link>
                  </motion.div>
                </li>

                <li>
                  <div>
                    <span>
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bookmark"
                          class="svg-inline--fa fa-bookmark "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M48 0H336C362.5 0 384 21.49 384 48V487.7C384 501.1 373.1 512 359.7 512C354.7 512 349.8 510.5 345.7 507.6L192 400L38.28 507.6C34.19 510.5 29.32 512 24.33 512C10.89 512 0 501.1 0 487.7V48C0 21.49 21.49 0 48 0z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      <Link to="/my-address">My adresses</Link>
                    </motion.div>
                  </div>
                </li>

                <li>
                  <div>
                    <span>
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="truck"
                          class="svg-inline--fa fa-truck "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="currentColor"
                            d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      <Link to="/profile">Profile</Link>
                    </motion.div>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="gear"
                          class="svg-inline--fa fa-gear "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      <Link to="/ustawienia">Ustawienia</Link>
                    </motion.div>
                  </div>
                </li>
              </ul>

              <ul class="support-list vertical" height="auto">
                <li>
                  <motion.div className="name" animate={controlTitleText}>
                    Support
                  </motion.div>
                </li>

                <li>
                  <div>
                    <span>
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="phone"
                          class="svg-inline--fa fa-phone "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      +48 123456789
                    </motion.div>
                  </div>
                </li>

                <li>
                  <div>
                    <span>
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="envelope"
                          class="svg-inline--fa fa-envelope "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      mamil@gmail.com
                    </motion.div>
                  </div>
                </li>
                <li>
                  <div>
                    <span>
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="film"
                          class="svg-inline--fa fa-film "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <motion.div animate={controlTitleText}>
                      Akademia IMPAGO
                    </motion.div>
                  </div>
                </li>
              </ul>
            </div>

            <BsFillArrowRightSquareFill
              onClick={() => (active ? showLess() : showMore())}
              className={`text-2xl text-black cursor-pointer bottom-10 m-auto ${
                active ? "rotate-180" : ""
              }`}
            />
          </motion.div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Sidebar;
