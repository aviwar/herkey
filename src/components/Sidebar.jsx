import React from 'react';
import HpLogo from '../assets/images/Hp.png';
import DashboardIcon from '../assets/images/dashboard.svg';
import JobsIcon from '../assets/images/Jobs_outline.svg';
import ApplicationIcon from '../assets/images/profiles.svg';
import FollowersIcon from '../assets/images/followers.svg';
import EnterpriseIcon from '../assets/images/enterprise.svg';
import CollaborationIcon from '../assets/images/collaboration.svg';
import ConversationIcon from '../assets/images/conversation.svg';

const MENU_ITEMS = [
  {
    title: "Dashboard",
    source: DashboardIcon
  },
  {
    title: "Jobs",
    source: JobsIcon
  },
  {
    title: "Applications",
    source: ApplicationIcon
  },
  {
    title: "Followers",
    source: FollowersIcon
  },
  {
    title: "My Inventory",
    source: EnterpriseIcon
  },
  {
    title: "Company Profile",
    source: EnterpriseIcon
  },
  {
    title: "All Users",
    source: CollaborationIcon
  },
  {
    title: "My Account",
    source: ConversationIcon,
    isActive: true
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed z-20">

      {/* Desktop Sidebar Menu */}
      <div className="hidden md:block w-60 bg-black-200 top-20 h-screen">
        <div className="p-4 pb-0 flex items-center">
          <img src={HpLogo} alt="Logo" className="h-12 w-12 rounded-full" />
          <div className="ml-1">
            <h1 className="font-light text-white text-[40px]/[55px]">Hello,</h1>
          </div>
        </div>
        <div className="p-4 py-0 flex justify-between items-center">
          <p className="font-light text-white text-[22px]/[30px] text-ellipsis overflow-hidden whitespace-nowrap">
            Hewlett Packard Enterprises
          </p>
          <p className='h-4 w-4 text-green'>&gt;</p>
        </div>

        <nav className="mt-8">
          <ul>
            {MENU_ITEMS.map((item, index) => (
              <li key={index} className={`flex items-center space-x-4 p-2 ml-2 ${item.isActive ? 'border-l-[6px] border-green bg-black-300':''}`}>
                <img src={item.source} alt="{item.name}" className="h-4 w-4" />
                <span className={`leading[22px] ${item.isActive ? 'text-green' : 'text-gray-400'}`}>{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 p-4 text-xs/[17px] text-green">
          <p className="font-semibold">Contact Us -</p>
          <p className="">Email: admin@jobsforher.com</p>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className="md:hidden w-full bg-white shadow-md z-20">
        <nav className="p-2 text-gray-400">
          <ul>
            {MENU_ITEMS.slice(-4).map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-1.5">|</span>}
                <a
                  href="#"
                  className={`text-xs ${item.isActive ? 'text-green' : ''}`}
                >
                  {item.title}
                </a>
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
