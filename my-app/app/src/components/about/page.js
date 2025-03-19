import MenuBar from './MenuBar';

export default function About() {
    return (
      <div className="wrapper px-[16px]">
        <header className="flex justify-between items-center mb-[16px] mt-[16px]">
          <h3 className="text-[28px] font-bold">Linen</h3> 
          <img className="w-[32px] h-[32px]" src="/hamburger.png" alt="menu" /> 
        </header>
        <main className="flex flex-col gap-[16px]">
          <input 
            type="text" 
            placeholder="Search" 
            className="p-[16px] border-gray-100 border-[1px] rounded-[20px] w-[100%]" 
          />
          <img className="db rounded-[24px] w-[100%]" src="/picc1.png" alt="pic1.png" /> 
          <img className="db rounded-[24px] w-[100%]" src="/picc2.png" alt="pic2.png" />
        </main>
      </div>
    );
  }
  