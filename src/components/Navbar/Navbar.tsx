import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
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
} from "@material-tailwind/react";
import logo from '../../assets/logo-nav.png'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
const navListMenuItems = [
  "Blog", "Support" , "FAQs", "Community"
];
const navListMenuItems2 = [
  "Staking", "Convert" , "Swap"
];

function NavListMenu1() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ( title, key) => (
      <a href="#" key={key}>
        <MenuItem placeholder={undefined} className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography placeholder={undefined}
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography placeholder={undefined} as="div" variant="small" className="font-medium">
            <ListItem placeholder={undefined}
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder={undefined} className="hidden w-[12 rem] gap-3 overflow-visible lg:grid">
        <ul className="col-span-4 flex w-full flex-col gap-1 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListMenu2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems2.map(
    ( title , key) => (
      <a href="#" key={key}>
        <MenuItem placeholder={undefined} className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography placeholder={undefined}
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }} 
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography placeholder={undefined} as="div" variant="small" className="font-medium">
            <ListItem placeholder={undefined}
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Features
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder={undefined} className="hidden w-[12 rem] gap-3 overflow-visible lg:grid">
        <ul className="col-span-4 flex w-full flex-col gap-1 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List placeholder={undefined} className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography placeholder={undefined}
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem placeholder={undefined} className="flex items-center gap-2 py-2 pr-4">Assets</ListItem>
      </Typography>
      <NavListMenu1 />
      <NavListMenu2 />
      <Typography placeholder={undefined}
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem placeholder={undefined} className="flex items-center gap-2 py-2 pr-4">
         NFTs
        </ListItem>
      </Typography>
    </List>
  );
}
 
const NavbarMenu = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showForm, setShowForm] = useState(false);  // State to control form visibility
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Ensure to replace placeholders below with your actual EmailJS details
    emailjs.sendForm('service_9gc4oee', 'template_a54szlf', form.current, 'pFuS6DzkRF7vqH-Gd')
      .then((result) => {
          console.log(result.text);
          setShowForm(false);  // Close the form after successful submission
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Navbar placeholder={undefined} className="container-fluid py-8 shadow-none px-[7rem]" fullWidth={true}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src={logo} className="w-40 h-auto" alt="Logo" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
        <Button 
          placeholder={undefined} 
          variant="outlined" 
          size="sm" 
          className="text-emerald border-emerald normal-case"
          onClick={() => setShowForm(true)}  // Show the form modal on button click
        >
          Sign-Up 
        </Button>

        {showForm && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label>Full Name</label>
                  <input type="text" name="user_name" required className="w-full p-2 border rounded-md" />
                </div>
                <div className="mb-4">
                  <label>Email</label>
                  <input type="email" name="user_email" required className="w-full p-2 border rounded-md" />
                </div>
                <div className="mb-4">
                  <label>Message</label>
                  <textarea name="message" required className="w-full p-2 border rounded-md"></textarea>
                </div>
                <button type="submit" className="bg-emerald text-white py-2 px-4 rounded-md">Submit</button>
                <button onClick={() => setShowForm(false)} className="ml-2 py-2 px-4">Close</button>
              </form>
            </div>
          </div>
        )}

          <Button placeholder={undefined} variant="filled" size="sm" className="text-white bg-emerald normal-case">
             Demo Wallet
          </Button>
       
        </div>
        <IconButton placeholder={undefined}
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button placeholder={undefined} variant="outlined" size="sm" className="text-emerald border-emerald normal-case" fullWidth>
          Sign-Up
          </Button>
          <Button placeholder={undefined} variant="filled" size="sm" fullWidth className="text-white bg-emerald normal-case">
            Demo Wallet
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
export default NavbarMenu
