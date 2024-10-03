import Image from 'next/image';
import ButtonLink from '@/components/button/ButtonLink';
export default function Home() {
  return (
    <div className='flex flex-col md:flex-row gap-28 justify-between leading-relaxed'>
      <div className='flex md:flex-1 flex-col gap-14'>
        <h1 className='text-4xl md:text-7xl bg-gradient-to-b from-green-500 to-gray-300 bg-clip-text text-transparent p-2'>
          Better design for your digital products
        </h1>
        <p className='text-2xl font-light'>
          Turning your Idea into Reality. We bring togheter the team from the global tech industry
        </p>
        <ButtonLink url="/portfolio">See Our Works</ButtonLink>
      </div>
      <div className='hidden md:flex-1 items-center justify-center md:flex'>
        <Image src='/hero.png' alt='Imagem da hero section' width={500} height={500} className='object-cover' />
      </div>
    </div>
  );
}
