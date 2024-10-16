import SkillCard from "@/components/Cards/SkillCard";
import { COMBINED_DATA } from "@/utils/skillsData";

const SkillsSection = () => {
  return (
    <section className="flex flex-col justify-center bg-secondary w-full px-6 md:px-12 xl:px-40">
      <h1 className="font-semibold text-3xl md:text-4xl font-poppins mt-8">
        Skills
      </h1>
      <div
        // data-aos="fade-up"
        className="flex flex-wrap gap-4 items-center justify-center my-8 md:m-8 "
      >
        {COMBINED_DATA.map((item, idx) => {
          return <SkillCard idx={idx} key={idx} item={item} />;
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
