import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col mt-2 md:mt-8 mb-10 md:mb-16 items-center'>
      <img className='mb-4 md:mb-8 h-44 w-44 object-contain' src={logo} alt="A canvas" />
      <h1 className='text-xl md:text-4xl font-semibold text-amber-800 font-title tracking-widest uppercase'>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
