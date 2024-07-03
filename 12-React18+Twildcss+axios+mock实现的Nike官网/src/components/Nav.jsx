import { useState, useEffect } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { getNavLinks } from '../api';

const Nav = () => {
  const [navLinks, setNavLinks] = useState([]); // 初始化状态：空数组
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNavLinks();
        console.log(response);
        setNavLinks(response.data);
      } catch (error) {
        console.error("Error fetching nav links:", error);
      }
    };
    fetchData(); // 组件挂载时：调用
  }, []); // 空的依赖数组：表示这个 effect 只会在组件挂载时运行一次
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
