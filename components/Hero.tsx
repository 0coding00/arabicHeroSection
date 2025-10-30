import Image from "next/image";
import firstImage from "@/public/1.png";
import secondImage from "@/public/2.png";
import thirdImage from "@/public/3.png";
import fourthImage from "@/public/4.png";
import cursor from "@/public/cursor.png";

const Hero = () => {
  return (
    <div className="w-full mt-10 sm:mt-16">
      <header className="w-full mb-2 sm:mb-3">
        <h3 className="text-center text-sm sm:text-base md:text-lg font-arabic text-red-500 mx-auto">
          سابقون – التقنية برؤية عربية
        </h3>
      </header>

      <p
        className="
          font-tajawal text-black text-center font-extrabold
          text-[48px] md:text-[64px]
          leading-tight sm:leading-16 md:leading-20 lg:leading-[93px]
          mx-4 sm:mx-10
          tracking-[-1px] md:tracking-[-2px] lg:tracking-[-3.5px]
        "
      >
        مستقبل علامتك التجارية يبدأ من هنا بدعم تقني،
        <span className="relative inline-block align-middle mx-1 mt-2 sm:mt-0 border-[2.96px] border-[rgba(51,197,255,1)] bg-gray-400/30 px-2 py-1">
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-white border-[3px] border-[rgba(51,197,255,1)]" />
          <span className="text-[rgba(51,197,255,1)]">تفكير إبداعي</span>
          <span className="absolute -top-2 -left-2 w-3 h-3 bg-white border-[3px] border-[rgba(51,197,255,1)]" />
          <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-white border-[3px] border-[rgba(51,197,255,1)]" />
          <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-white border-[3px] border-[rgba(51,197,255,1)]" />

          <Image
            className="absolute hidden xl:block top-26 left-91"
            src={cursor}
            alt="cursor-image"
            width={36}
            height={36}
            priority
          />
        </span>{" "}
        ، وتنفيذ لا يرضى بأقل من التميز.
      </p>

      <p
        className="
          font-cairo text-center
          mx-4 sm:mx-10 md:mx-24 lg:mx-40 xl:mx-60
          mt-4 sm:mt-5
          font-normal text-base md:text-lg
          leading-7 md:leading-[30px]
          tracking-[0] text-black
        "
      >
        سابقون، شركة تقنية ناشئة بأيدي عربية قوية تنافس الشركات العالمية في
        تحويل أفكارك لحلول رقمية متكاملة، لدينا فريق يعرف كيف يدمج بين الخبرة
        العالية والرؤية الاستراتيجية مع استخدام أدوات الذكاء الاصطناعي بذكاء دون
        الاعتماد الكلي عليه لنضمن إنك دايماً سابق بخطوة.
      </p>

      <div
        className="
          flex flex-col sm:flex-row justify-center items-stretch sm:items-center
          gap-3 sm:gap-4 mt-6 sm:mt-8 px-4
        "
      >
        <button
          type="button"
          className="
            bg-[rgba(51,197,255,1)] text-white
            text-base sm:text-lg
            px-6 sm:px-8 py-3 sm:py-4
            rounded-lg
            w-full sm:w-auto
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(51,197,255,1)]
          "
        >
          اطلب استشارة مجانية
        </button>
        <button
          type="button"
          className="
            bg-[#9757D7] text-white
            text-base sm:text-lg
            px-6 sm:px-8 py-3 sm:py-4
            rounded-lg
            w-full sm:w-auto
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9757D7]
          "
        >
          ابدأ مشروعك الآن
        </button>
      </div>

      <section
        className="
          relative mt-8 sm:mt-10 mb-10 sm:mb-16
          mx-4 sm:mx-10
          border border-[rgba(221,225,227,1)]
          px-4 sm:px-6 md:px-10
          py-6 sm:py-8 md:py-10
          rounded-xl 
        "
      >
        <div className="hidden md:block absolute inset-2 border border-[rgba(221,225,227,1)] rotate-3 pointer-events-none" />

        <h3 className="text-center font-cairo text-sm sm:text-base md:text-lg pb-3 sm:pb-4">
          النجاح لا يحتاج تقنيات وأدوات بقدر ما يحتاج فريق يفهمك، يفكر معك ويأسس
          طموحك ويبني مشروعك على المدى البعيد
        </h3>

        <div
          className="
            grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6
            items-center justify-items-center
          "
        >
          <Image
            src={fourthImage}
            alt="fourth Image"
            width={100}
            height={100}
          />
          <Image src={firstImage} alt="first Image" width={120} height={120} />
          <Image src={thirdImage} alt="third Image" width={120} height={120} />
          <Image
            src={secondImage}
            alt="second Image"
            width={160}
            height={160}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
