import React, { useState } from "react";
import Contact from "../../../assets/images/contactus.png";
import Bell from "../../../assets/images/bell 1.png";
import ChartComponent from "../../../components/Chart/chart";
import ArrowUpRightIcon from "../../../assets/icons/arrowup";

const DashboardPage = () => {
  const [reportType, setReportType] = useState("study-hours");
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center pt-6 pb-3 px-8">
        <p className="text-2xl font-semibold text-[#160041] font-recoleta">
          Dashboard
        </p>
        <div className="flex gap-8 items-center">
          <button className="text-custom-purple border border-custom-purple px-6 py-2 rounded-md">
            Start a Course
          </button>
          <img src={Bell} alt="Notification Bell" className="w-6 h-6" />
        </div>
      </div>

      <hr />

      <div className="flex flex-col px-8">
        <div className="flex">
          <div className="flex flex-col w-[33.7%] pr-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-semibold text-[#3900B4] font-recoleta mt-8">
                Upcoming Classes
              </h3>
              <p className="underline text-sm text-[#3900B4] cursor-pointer font-airbnb mt-8">
                View all
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="bg-[#F8F8F8] p-4 rounded-2xl flex items-center gap-4">
                <button className="mb-1 rounded-full border px-5 py-5 bg-[#D2D5FF]"></button>
                <div>
                  <p className="font-recoleta">Numeric Elements </p>
                  <p className="font-airbnb"> in 16 hrs</p>
                </div>
              </li>
              <li className="bg-[#F8F8F8] p-4 rounded-2xl flex items-center gap-4">
                <button className="mb-1 rounded-full border px-5 py-5 bg-[#D2D5FF]"></button>
                <div>
                  <p className="font-recoleta"> London Bridge Poems</p>
                  <p className="font-airbnb"> in 2 days</p>
                </div>
              </li>
              <li className="bg-[#F8F8F8] p-4 rounded-2xl flex items-center gap-4">
                <button className="mb-1 rounded-full border px-5 py-5 bg-[#D2D5FF]"></button>
                <div>
                  <p className="font-recoleta">Masha & Pooh the Bear</p>
                  <p className="font-airbnb">on May 5</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-l border-gray-300"></div>

          <div className="flex flex-col w-[65%] pl-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#3900B4] font-recoleta mt-8">
                Report
              </h3>
              <div className="relative mt-5">
                <select className="border border-[#A77DFF] px-4 py-2 rounded-md focus:outline-none">
                  <option value="study-hours">Study Hours</option>
                  <option value="test-scores">Test Scores</option>
                </select>
              </div>
            </div>

            <div className="rounded-xl p-2 bg-[#F8F8F8] mt-8">
              <ChartComponent reportType={reportType} />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex pl-8">
        <div className="flex flex-col w-[33%] pr-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-semibold text-[#3900B4] font-recoleta mt-8">
              Homework
            </h3>
            <p className="underline text-sm text-[#3900B4] cursor-pointer font-airbnb mt-8">
              View all
            </p>
          </div>{" "}
          <ul className="space-y-4">
            <div className="flex flex-col bg-[#F8F8F8] p-4 rounded-2xl ">
              <li className="flex items-center gap-4">
                <button className="mb-1 rounded-full border px-5 py-5 bg-[#B1D5A2]"></button>
                <div>
                  <p className="font-recoleta">Masha & Pooh the Bear</p>
                  <p className="font-airbnb">Due in 16 hrs</p>
                </div>
              </li>
              <p className="mt-4 font-airbnb underline text-lg text-[#3900B4] cursor-pointer flex items-center gap-2">
                <span>7 tasks pending completion</span>
                <ArrowUpRightIcon className="h-5 w-5 text-[#3900B4]" />
              </p>
            </div>

            <div className="flex flex-col bg-[#F8F8F8] p-4 rounded-2xl ">
              <li className="flex items-center gap-4">
                <button className="mb-1 rounded-full border px-5 py-5 bg-[#B1D5A2]"></button>
                <div>
                  <p className="font-recoleta">1-2 Londom Bridge Poems</p>
                  <p className="font-airbnb">Due in 16 hrs</p>
                </div>
              </li>
              <p className="mt-4 font-airbnb underline text-lg text-[#3900B4] cursor-pointer flex items-center gap-2">
                <span>2 tasks pending completion</span>
                <ArrowUpRightIcon className="h-5 w-5 text-[#3900B4]" />
              </p>
            </div>
          </ul>
        </div>

        <div className="border-l border-gray-300 h-[56vh]"></div>

        <div className="flex flex-col w-[33%] px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-semibold text-[#3900B4] font-recoleta mt-8">
              Upcoming Test
            </h3>
            <p className="underline text-sm text-[#3900B4] cursor-pointer font-airbnb mt-8">
              View all
            </p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="bg-[#F8F8F8] p-4 rounded-2xl flex items-center gap-4">
              <button className="mb-1 rounded-full border px-5 py-5 bg-[#FFC5BC]"></button>
              <div>
                <p className="font-recoleta">Numeric Elements </p>
                <p className="font-airbnb"> in 16 hrs</p>
              </div>
            </li>
            <li className="bg-[#F8F8F8] p-4 rounded-2xl flex items-center gap-4">
              <button className="mb-1 rounded-full border px-5 py-5 bg-[#FFC5BC]"></button>
              <div>
                <p className="font-recoleta"> London Bridge Poems</p>
                <p className="font-airbnb"> in 2 days</p>
              </div>
            </li>
            <li className="bg-[#F8F8F8] p-4 rounded-2xl flex items-center gap-4">
              <button className="mb-1 rounded-full border px-5 py-5 bg-[#FFC5BC]"></button>
              <div>
                <p className="font-recoleta">Masha & Pooh the Bear</p>
                <p className="font-airbnb">on May 5</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="border-l border-gray-300"></div>

        <div className="flex flex-col w-[33%] pl-4">
          <h3 className="text-lg font-semibold text-[#3900B4] font-recoleta mt-8">
            Contact Support
          </h3>

          <div className="flex flex-col items-center justify-center pt-8">
            <img src={Contact} alt="contact" className="mb-6" />
            <p className="font-airbnb text-xl">Talk to us.</p>
            <p className="font-airbnb text-xl">We are here for you!</p>
            <button className="text-lg font-semibold text-[#3900B4] font-recoleta border border-custom-purple px-8 py-2 rounded-md mt-6">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
