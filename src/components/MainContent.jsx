import React from 'react';
import LeftArrowIcon from '/images/left-arrow.svg';
import EditIcon from '/images/edit.svg';
import ProfileImage from '/images/profile.png';

const MainContent = ({isSidebarVisible}) => {
  return (
    <main className={`flex-1 p-4 ml-0 md:ml-${isSidebarVisible ? '60' : '0'} md:mt-0 mt-2`}>
      {/* Breadcrumb (Desktop only) */}
      <nav className="mb-4 hidden md:block">
        <ol className="flex space-x-2 text-xs">
          <li>
            <p className='text-gray-700'>Dashboard</p>
          </li>
          <li className="text-gray-700">|</li>
          <li>
            <a href="#" className="text-blue font-semibold">My Account</a>
          </li>
        </ol>
      </nav>

      <div className="bg-white shadow-lg">
        <div className="border-b border-gray-300 p-4">
          <div className="flex items-center">
            <img src={LeftArrowIcon} alt="Icon" className="h-[18px] w-[18px] mr-2" />
            <span className="text-xs/[19px] md:text-base font-semibold text-black-100 ">My Account</span>
          </div>
        </div>

        <div className="md:p-4">
          <div>
            <div className='bg-gray-200 p-4'>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black-100 leading-[22px]">My Profile</span>
                <img src={EditIcon} alt="Edit Icon" className="h-[18px] w-[18px]" />
              </div>
            </div>

            <div className='bg-white border border-gray-300 p-4 mb-4'>
              <div className="flex items-center mb-4">
                <div className="relative h-[76px] w-[76px] md:h-[118px] md:w-[118px] mr-4">
                  <div className="rounded-full overflow-hidden border border-gray-800 h-[76px] w-[76px] md:h-[118px] md:w-[118px]">
                    <img src={ProfileImage} alt="Profile Pic" className="object-cover" />
                  </div>

                  <div className="absolute right-0 bottom-0 p-2 border bg-white rounded-full cursor-pointer">
                    <img src={EditIcon} alt="Edit Icon" className="h-[11px] w-[11px] md:h-[18px] md:w-[18px]" />
                  </div>
                </div>

                <div className='text-sm/[19px] text-black-200'>
                  <p className="font-semibold text-[22px]/[30px] whitespace-nowrap">Divya Chatterjee</p>
                  <p className="text-xs/[17px] text-gray-400">Designation</p>
                  <p>Assistant Manager - HR</p>
                  <p className="text-xs/[17px] text-gray-400">Company Name</p>
                  <p>XXY Company Name</p>
                </div>
              </div>

              <div className="mb-4  text-left">
                <p className="text-xs/[17px] text-gray-400">About Me</p>
                <p className='text-sm/[19px]'>
                  Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge.
                  Its mission is to empower every person and every organization on the planet to achieve more.
                  Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud
                  services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies.
                </p>
              </div>
            </div>
          </div>


          <div className="md:flex md:space-x-4">
            <div className="md:w-1/2 mb-4">
              <div className='bg-gray-200 p-4'>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black-100 leading-[22px]">My Account Settings</span>
                  <img src={EditIcon} alt="Edit Icon" className="h-[18px] w-[18px]" />
                </div>
              </div>

              <div className='bg-white border border-gray-300 p-4 mb-4 text-sm/[19px] hidden md:block'>
                <div className="flex mb-6">
                  <div className="flex-grow">
                    <div>
                      <p className="text-xs/[17px] text-gray-400">Full Name*</p>
                      <p>Divya Chatterjee</p>
                    </div>
                  </div>
                  <div className='flex-grow'>
                    <div className='ml-12'>
                      <p className="text-xs/[17px] text-gray-400">Designation</p>
                      <p>Assistant Manager - HR</p>
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  <div className="flex-grow">
                    <div>
                      <p className="text-xs/[17px] text-gray-400">Phone / Landline*</p>
                      <p>7012248563</p>
                    </div>
                  </div>
                  <div className='flex-grow'>
                    <div className='ml-8 mt-4'>
                      <a href="#" className="font-semibold text-blue">Change Password</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white border border-gray-300 p-4 mb-4 text-sm/[19px] md:hidden'>
                <div className="mb-6">
                  <div className="text-left">
                    <p className="text-xs/[17px] text-gray-400">Full Name*</p>
                    <p>Divya Chatterjee</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-left">
                    <p className="text-xs/[17px] text-gray-400">Designation</p>
                    <p>Assistant Manager - HR</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-left">
                    <p className="text-xs/[17px] text-gray-400">Phone / Landline*</p>
                    <p>7012248563</p>
                  </div>
                </div>
                <div className="text-right">
                  <a href="#" className="font-semibold text-blue">Change Password</a>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 mb-4">
              <div className='bg-gray-200 p-4'>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black-100 leading-[22px]">Application Settings</span>
                  <img src={EditIcon} alt="Edit Icon" className="h-[18px] w-[18px]" />
                </div>
              </div>

              <div className='bg-white border border-gray-300  text-xs/[17px] p-4'>
                <p className="text-gray-400 mb-2">Receive job applications via</p>

                <label className="flex items-center space-x-2 mb-2">
                  <input id='dashboard-only' type="radio" name='notification' className="form-radio text-green border-green focus:ring-green" checked />
                  <label htmlFor="dashboard-only" className='text-black-100'>Only on my dashboard</label>
                </label>

                <label className="flex items-center space-x-2 mb-4">
                  <input id='email-dashboard' type="radio" name='notification' className="form-radio text-green border-green focus:ring-green" />
                  <label htmlFor="email-dashboard" className='text-black-100'>Email and on my dashboard</label>
                </label>

                <p className='mb-3'>*Please note, this setting will not impact your old job postings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
