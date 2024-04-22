import React from "react";

export default function Dummy() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <div
        className={isMobile ? <HeaderSection></HeaderSection> : "ab25"}
        onClick={() => setIsMobile(false)}
      ></div>

      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <button
        className=" abcde d-xl-none"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="bi bi-list mobile-nav-toggle "></i>
        ) : (
          <i class="fa-solid bi-xmark mobile-nav-toggle"></i>
        )}
      </button>
      {/* <i className="bi bi-list mobile-nav-toggle d-xl-none"></i> */}
    </div>
  );
}
