import "./App.css";

function App() {
  return (
    <>
      {/* navbar */}
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="text-xl ">Nattaporn</a>
        </div>
        <div className="navbar-end">
          <a className="btn btn-base-100 mx-2" href="#About">
            About
          </a>
          <a className="btn btn-base-100 mx-2" href="#skills">
            Passions
          </a>
          {/* <a className="btn btn-base-100 mx-2" href="#My Portfolio">
            Portfolio
          </a> */}
          <a className="btn btn-primary mx-2" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      {/* content1 */}
      <div className="hero w-100 bg-base-100">
        <div className="hero-content text-left">
          <div className="m-8">
            <h1 className="text-5xl font-bold">Hi !</h1>
            <h1 className="text-5xl font-bold">I’m Nattaporn.</h1>
            <h1 className="text-5xl font-bold">a Full Stack Developer</h1>
            <p className="py-6">
              I am interested in the field of full stack developer in an
              organization to learn and develop skills in analyst, communicating
              with people and dealing with all kinds of problems to increase new
              knowledge in work.
            </p>
          </div>
          <div className="max-w-md md:w-1/2 md:items-end">
            <img src="heroImg1.png" alt="pro" className="w-64 md:w-80" />
          </div>
        </div>
      </div>
      {/* content2 */}
      <div id="skills" className="text-center p-10 bg-base-100">
        <p>skills</p>
      </div>
      <div className="flex space-x-4">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="undraw_Wireframing_re_q6k6 1.png" alt="pic1" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title">Front-End Developer</h2>
            <p>(CSS, Bootstrap, Tailwind)</p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl  text-center">
          <figure>
            <img src="undraw_Detailed_analysis_re_tk6j 1.png" alt="pic2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Back-End Developer</h2>
            <p>(NodeJS, Laravel, Codeigniter)</p>
          </div>
        </div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="undraw_Design_process_re_0dhf 1.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">communication</h2>
            <p>communicating with people and dealing</p>
          </div>
        </div>
      </div>

      {/* content3 ยังไม่พร้อมใช้งานเลยขอปิดไว้ก่อนค่ะ */}
      {/* <div id="My Portfolio" className="text-center p-10 bg-base-100">
        <p>My Portfolio</p>
      </div>
      <div className="flex space-x-4"> */}
      {/* sendpay */}
      {/* <div className="card w-96 bg-base-100 shadow-xl flex flex-col relative ">
          <div className="flex-grow">
            <img
              src="Ellipse 6.png"
              alt="ellipse"
              className="absolute top-0 left-0 w-70 h-30"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
            >
              <g clip-path="url(#clip0_8_13)">
                <path
                  d="M0.477844 38.8077L15.22 23.428L3.90441 7.0921C3.34659 7.80929 2.94816 8.76554 2.86847 9.88116L-0.000280764 35.939C-0.0799683 37.0546 0.0794067 38.0109 0.477844 38.8077Z"
                  fill="#6C63FF"
                />
                <path
                  d="M49.9636 4.38281L28.6074 24.225L45.4215 46.9359C46.3777 46.1391 47.0152 44.9437 47.1746 43.5094L50.9996 7.96875C51.159 6.53437 50.6808 5.17969 49.9636 4.38281Z"
                  fill="#6C63FF"
                />
                <path
                  d="M20.4794 31.3968L15.22 23.428L0.477844 38.8077C0.796594 39.5249 1.35441 40.003 1.99191 40.1624L42.4732 47.8124C43.5888 48.0515 44.6247 47.653 45.4216 46.9359L28.6075 24.2249L20.4794 31.3968Z"
                  fill="#6C63FF"
                />
                <path
                  d="M47.255 3.18758L5.65809 5.97664C5.02059 6.05633 4.38309 6.45477 3.90497 7.09227L15.3003 23.4282L20.5597 31.397L28.6878 24.2251L49.9643 4.38289C49.2472 3.58602 48.2909 3.10789 47.255 3.18758Z"
                  fill="#6C63FF"
                />
                <path
                  d="M28.0503 18.8062L28.5284 14.7421L14.5831 14.6624L12.2722 33.7077L25.819 36.8952L26.3768 32.8312L16.1768 30.839L16.7347 26.4562L26.9347 27.8905L27.4128 23.8265L17.1331 22.7905L17.6909 18.328L28.0503 18.8062Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_13">
                  <rect width="51" height="51" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="card-body text-center col-start-3">
              <h2 className="card-title">Sendpay</h2>
            </div>
            <img
              src="SendPay 1.png"
              alt="pic1"
              className="absolute bottom-0 right-0 w-50 h-25"
            />
          </div>
        </div> */}

      {/* E-commerce */}
      {/* <div className="card w-96 bg-base-100 shadow-xl text-center flex flex-col">
          <div className="flex-grow">
            <img
              src="Ellipse 6 (1).png"
              alt="ellipse"
              className="absolute top-0 left-0 w-70 h-30 p-0 x-0"
            />
            <div className="card-body top-0 left-0 w-70 h-30 p-0 x-0">
              <h2 className="card-title">E-Commerce</h2>
            </div>
            <img
              src="e-commerce 1 1.png"
              alt="pic2"
              className="absolute bottom-0 right-0 w-70 h-40"
            />
          </div>
        </div> */}

      {/* BeatsLearning */}
      {/* <div className="card w-96 bg-base-100 shadow-xl flex flex-col">
          <div className="flex-grow ">
            <img
              src="Ellipse 6 (2).png"
              alt="ellipse"
              className="absolute top-0 left-0 w-70 h-30"
            />
            <img
              src="Screenshot (162) 1.png"
              alt="pic3"
              className="absolute top-0 left-0 w-30 h-30"
            />
            <img
              src="Edtech 1.png"
              alt="pic3"
              className="absolute bottom-0 right-0 w-70 h-40"
            />
          </div>
        </div>
      </div> */}

      {/* footer */}
      <footer id="contact" className="footer footer-center p-10 bg-base-100">
        <p>Contact Me</p>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/NTPJJ">
            <img src="Git.png" alt="github" />
          </a>
          <a href="https://instagram.com/ntpj.orn?igshid=OGQ5ZDc2ODk2ZA==">
            <img src="Instagram.png" alt="Instagram" />
          </a>
          <a href="tel:+66623842112">
            <img src="telpon.png" alt="telpon" />
          </a>
          <a href="mailto:nattaporn.jong@gmail.com">
            <img src="Email.png" alt="Email" />
          </a>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="330"
          viewBox="0 0 1440 330"
          fill="none"
        >
          <path
            d="M-201 330L-143.7 288.8C-86.4 247.6 28.2 165.2 142.8 165.2C257.4 165.2 372 247.6 486.6 247.6C601.2 247.6 715.8 165.2 830.4 151.552C945 136.875 1059.6 193.525 1174.2 178.847C1288.8 165.2 1403.4 82.8 1460.7 41.6L1518 0.400024V330H1460.7C1403.4 330 1288.8 330 1174.2 330C1059.6 330 945 330 830.4 330C715.8 330 601.2 330 486.6 330C372 330 257.4 330 142.8 330C28.2 330 -86.4 330 -143.7 330H-201Z"
            fill="#4581F6"
          />
          <text
            x="50%"
            y="90%"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="#ffffff"
            font-size="24px"
          >
            Design By Nattaporn
          </text>
        </svg>
      </footer>
    </>
  );
}

export default App;
