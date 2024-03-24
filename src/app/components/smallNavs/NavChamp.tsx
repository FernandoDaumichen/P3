import Link from "next/link";
export default function NavChamp() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      return (
        <div className="flex justify-between">
          <button
            className="bg-white rounded-xl drop-shadow-xl p-4 text-black mx-2 dark:bg-white"
            onClick={() => scrollToSection('standings')}
          >
            Standings
          </button>
          <button
            className="bg-white rounded-xl drop-shadow-xl p-4 text-black mx-2 dark:bg-white"
            onClick={() => scrollToSection('news')}
          >
            News
          </button>
          <button
            className="bg-white rounded-xl drop-shadow-xl p-4 text-black mx-2 dark:bg-white"
            onClick={() => scrollToSection('top-scorers')}
          >
            Top Scorers
          </button>
        </div>
      );
    }
    