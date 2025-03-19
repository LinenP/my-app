'use client';

function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-[16px] mt-[16px]">
        <h3 className="text-[28px] font-Medium">Linen</h3>
        <img className="w-[32px] h-[32px]" src="/hamburger.png" alt="menu" />
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Homepage</h1>
        <p className="mt-4 text-lg text-gray-700">ยินดีต้อนรับสู่เว็บของเรา</p>
      </main>
    </>
  );
}
export default function About() {
    return (
      <div className="wrapper px-[16px]">
        <header className="flex justify-between items-center mb-[16px] mt-[16px]">
          <h3 className="text-[28px] font-Medium">Linen</h3> 
          <img className="w-[32px] h-[32px]" src="/hamburger.png" alt="menu" /> 
        </header>
        <main className="flex flex-col gap-[16px]">
          <input 
            type="text" 
            placeholder="Search" 
            className="p-[16px] border-gray-100 border-[1px] rounded-[20px] w-[100%]" 
          />
          <img className="db rounded-[24px] w-[100%]" src="/pic1.jpg" alt="pic1.jpg" /> 
          <img className="db rounded-[24px] w-[100%]" src="/pic2.jpg" alt="pic2.jpg" />
        </main>
      </div>
    );
  }
  