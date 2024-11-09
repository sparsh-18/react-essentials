import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col mt-2 mb-8 md:mb-10 items-center'>
      <img className='mb-4 md:mb-8 h-44 w-44 object-contain' src={logo} alt="A canvas" />
      <h1 className='text-lg md:text-4xl font-semibold text-amber-800 font-title tracking-widest uppercase'>ReactArt</h1>
      <p className='text-sm md:text-base text-center mt-1 md:mt-2 text-amber-950'>A community of artists and art-lovers.</p>
    </header>
  );
}
