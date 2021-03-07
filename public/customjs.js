if (typeof window !== "undefined") {
  const body = document.querySelector("body");
  const allDropdownMenu = document.querySelectorAll(".dropdown-menu");
  const banner = document.querySelector(".banner");
  const images = ["/images/bg-2.png", "/images/bg-1.png"];

  body.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("dropdown") ||
      e.target.parentElement.classList.contains("dropdown")
    ) {
      console.log("");
    } else {
      allDropdownMenu.forEach((menu) => menu.classList.remove("show"));
    }
  });

  const loopBanner = () => {
    let count = 0;
    setInterval(() => {
      if (count === images.length) count = 0;
      // const loopstyles = {
      //   backgroundImage: `url(${images[count]})`,
      //   transition: "0.5s all ease-in-out",
      // };
      // Object.assign(banner.style, loopstyles);
      banner.style.backgroundImage = `url(${images[count]})`;
      banner.style.transition = "0.5s all ease-in-out";
      count++;
    }, 3000);
  };

  loopBanner();
}
