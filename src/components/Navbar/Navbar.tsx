import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import logo from '../../assets/logo-nav.png';
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const navListMenuItems = ['Blog', 'Support', 'FAQs', 'Community'];
const navListMenuItems2 = ['Staking', 'Convert', 'Buy Crypto', 'Sell Crypto'];

function NavListMenu1() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map((title, key) => (
    <a href='#' key={key}>
      <MenuItem
        placeholder={undefined}
        className='flex items-center gap-3 rounded-lg'
      >
        <div>
          <Typography
            placeholder={undefined}
            variant='h6'
            color='blue-gray'
            className='flex items-center text-sm font-bold'
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder={undefined}
            as='div'
            variant='small'
            className='font-medium'
          >
            <ListItem
              placeholder={undefined}
              className='flex items-center gap-2 py-2 pr-4  font-medium text-emerald hover:text-emerald focus:text-emerald active:text-emerald'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder={undefined}
          className='hidden w-[12 rem] gap-3 overflow-visible lg:grid'
        >
          <ul className='col-span-4 flex w-full flex-col gap-1 outline-none outline-0'>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenu2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems2.map((title, key) => (
    <a href='#' key={key}>
      <MenuItem
        placeholder={undefined}
        className='flex items-center gap-3 rounded-lg'
      >
        <div>
          <Typography
            placeholder={undefined}
            variant='h6'
            color='blue-gray'
            className='flex items-center text-sm font-bold'
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder={undefined}
            as='div'
            variant='small'
            className='font-medium'
          >
            <ListItem
              placeholder={undefined}
              className='flex items-center gap-2 py-2 pr-4 font-medium text-emerald hover:text-emerald focus:text-emerald active:text-emerald'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Features
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder={undefined}
          className='hidden w-[12 rem] gap-3 overflow-visible lg:grid'
        >
          <ul className='col-span-4 flex w-full flex-col gap-1 outline-none outline-0'>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      placeholder={undefined}
      className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'
    >
      <Typography
        placeholder={undefined}
        as='a'
        href='#'
        variant='small'
        color='blue-gray'
        className='font-medium'
      >
        <ListItem
          placeholder={undefined}
          className='flex items-center text-emerald hover:text-emerald focus:text-emerald active:text-emerald gap-2 py-2 pr-4'
        >
          Assets
        </ListItem>
      </Typography>
      <NavListMenu1 />
      <NavListMenu2 />
      <Typography
        placeholder={undefined}
        as='a'
        href='#'
        variant='small'
        color='gray'
        className='font-medium'
      >
        <ListItem
          placeholder={undefined}
          className='flex items-center text-emerald hover:text-emerald focus:text-emerald active:text-emerald gap-2 py-2 pr-4'
        >
          NFTs
        </ListItem>
      </Typography>
    </List>
  );
}

const NavbarMenu: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar
      placeholder={undefined}
      className='container-fluid py-8 shadow-none md:px-[7rem]'
      fullWidth={true}
    >
      <div className='flex justify-between text-blue-gray-900'>
        <img src={logo} className='w-40 h-auto' />

        <div className='hidden lg:block'>
          <NavList />
        </div>

        <div className='hidden gap-2 lg:flex'>
          <Button
            placeholder={undefined}
            variant='outlined'
            size='sm'
            className='text-emerald border-emerald normal-case'
            onClick={handleSignUpClick}
          >
            Sign-Up
          </Button>

          <Button
            placeholder={undefined}
            variant='filled'
            size='sm'
            className='text-white bg-emerald normal-case'
            onClick={() => window.open('https://demo.leyyer.com')}
          >
            Demo Wallet
          </Button>
        </div>

        <IconButton
          placeholder={undefined}
          variant='text'
          color='blue-gray'
          className='lg:hidden'
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />

        <div className='flex w-full flex-nowrap items-center gap-2 lg:hidden'>
          <Button
            placeholder={undefined}
            variant='outlined'
            size='sm'
            className='text-emerald border-emerald normal-case'
            fullWidth
            onClick={handleSignUpClick}
          >
            Sign-Up
          </Button>

          <Button
            placeholder={undefined}
            variant='filled'
            size='sm'
            fullWidth
            className='text-white bg-emerald normal-case'
            onClick={() => window.open('https://demo.leyyer.com')}
          >
            Demo Wallet
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
