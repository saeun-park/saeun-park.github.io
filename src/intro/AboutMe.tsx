const AboutMe = () => {
  return (
    <section id="aboutme" className=" flex px-6 py-20 bg-blue-900/95">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl text-white font-black text-center mb-12">
          ABOUT ME
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-white">
          <div className="flex items-center gap-3">
            <i className="text-blue-400 text-5xl ri-cake-2-line mr-4"></i>
            <p>
              <span className=" font-bold text-lg">생년월일</span> <br />
              2001.11.23
            </p>
          </div>

          <div className="flex items-center gap-3">
            <i className="text-blue-400 text-5xl ri-map-pin-2-line mr-4"></i>
            <p>
              <span className="font-bold text-lg">위치</span> <br />
              서울특별시 서대문구
            </p>
          </div>

          <div className="flex items-center gap-3">
            <i className="text-blue-400 text-5xl ri-phone-line mr-4"></i>
            <p>
              <span className="font-bold text-lg">연락처</span> <br />
              010-7200-3411
            </p>
          </div>

          <div className="flex items-center gap-3">
            <i className="text-blue-400 text-5xl ri-mail-line mr-4"></i>
            <p>
              <span className="font-bold text-lg">이메일</span>
              <br />
              saeunnpark@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
