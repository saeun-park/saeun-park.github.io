import Button from '../components/\bButton';
import ProfieImg from '../assets/images/chococat.jpg';

const Profile = () => {
  return (
    <section
      id="profile"
      className="flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full mb-6">
        {/* 이미지 + 텍스트 섹션 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* 왼쪽: 이미지 */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="rounded-full p-16">
                <img
                  src={ProfieImg}
                  alt="프로필"
                  className="rounded-full w-80"
                />
              </div>
            </div>
          </div>

          {/* 오른쪽: 텍스트 */}
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl mb-6">
              <span className="text-blue-800 font-extrabold">
                박사은 Saeun Park
              </span>
              <p className="mt-4 text-2xl font-bold">
                데이터 분석가 포트폴리오
              </p>
            </h1>

            <p className="text-lg mb-8 leading-relaxed">
              데이터 기반의 고객 여정 설계부터 서비스 구현까지,
              <br />
              전체 비즈니스를 이해하려고 노력하는 데이터 분석가입니다.
              <br />
              데이터로 비즈니스 문제를 해결하고 사회적 가치를 만들고자 합니다.
            </p>

            <div className="flex gap-4">
              <Button variant="primary" href="https://github.com/saeun-park">
                깃허브 보러가기
              </Button>
              <Button variant="secondary" href="https://ajsklaoao.tistory.com">
                블로그 보러가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
