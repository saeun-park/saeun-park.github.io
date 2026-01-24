const Profile = () => {
  return (
    <section
      id="profile"
      className="relative h-screen flex flex-col justify-between items-center bg-gray-200 z-20 overflow-hidden"
    >
      {/* Local Background Blobs */}
      <div
        className="absolute top-[-10rem] left-[-10rem] w-[50rem] h-[50rem] bg-pink-300/70 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute bottom-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-blue-300/50 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-[20%] left-[40%] w-[25rem] h-[25rem] bg-purple-300/50 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Main Title */}
      <div className="absolute top-[40%] left-[10%] -translate-y-1/2 text-left w-full max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-montserrat font-bold leading-relaxed text-gray-800">
          SAEUN'S <br /> PORTFOLIO
        </h1>
      </div>

      {/* Introductory Text */}
      <div className="absolute bottom-[30%] left-[10%] text-left w-full max-w-6xl mx-auto px-6">
        <p className="text-xl font-extralight leading-loose text-gray-800 ">
          안녕하세요, 데이터와 기획으로 문제를 정의하고, 개발로 실행 가능한
          결과를 만드는 박사은입니다.
          <br />
          반복되는 과정은 자동화하고, 누구나 이해할 수 있도록 문서화하며, 실사용
          환경까지 고려해 구현합니다.
        </p>
      </div>
    </section>
  );
};

export default Profile;
