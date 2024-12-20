const Hero = () => {
  return (
    <section className='min-h-screen relative'>
      <div
        className=' h-screen w-full z-0 bg-cover bg-center bg-fixed bg-no-repeat'
        style={{
          backgroundImage: `url(/diver.jpg)`,
        }}
      ></div>
      <div className='text-2xl flex items-center justify-center w-full text-white font-semibold absolute inset-y-0'>
        <p>Hero tag line here</p>
      </div>
    </section>
  );
};

export default Hero;
