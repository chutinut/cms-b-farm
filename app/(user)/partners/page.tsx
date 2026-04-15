"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import {
  FaWindows,
  FaDownload,
  FaGlobe,
  FaLine,
  FaPhoneAlt,
  FaMailBulk,
  FaChevronDown,
  FaFacebookSquare,
} from "react-icons/fa";

import { CollapseCard } from "@user/components";

export default function Partners() {
  const [partnerRef, partnerVisible] = useInView();

  const [open, setOpen] = useState(false);

  const sectionClass = (visible: boolean) =>
    `w-full flex flex-col items-center gap-2 p-5 md:p-20 scroll-mt-5
     transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
     ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center gap-5 bg-white-primary">
      <div
        ref={partnerRef}
        id="partner-section"
        className={sectionClass(partnerVisible)}
      >
        {/* Start Content */}
        {/* header 1 */}
        <div className="detail-container">
          <div className="detail-content flex-1 flex flex-col justify-center items-center gap-2">
            <h1 className="text-green-primary text-5xl font-bold">พันธมิตร</h1>
            <h3 className="text-gray-primary text-md font-semibold text-center">
              เครือข่ายความร่วมมือเพื่อการเกษตรอัจฉริยะด้วย HandySense Pro
            </h3>
          </div>
        </div>
        <hr className="divider" />
        {/* partner 1 */}
        <div className="detail-container items-center! md:items-start!">
          <div className="detail-content flex-1 md:max-w-5/12">
            <h3 className="text-green-primary text-4xl font-bold text-center md:text-left">
              รายชื่อผู้จัดจำหน่ายบอร์ด Handysense Pro
            </h3>
            <p className="text-gray-primary mt-4 text-center md:text-left">
              ตัวแทนจำหน่ายอุปกรณ์ที่มีคุณภาพ และรองรับกับ B-farm
            </p>
          </div>
          <div className="detail-content flex flex-col flex-1 gap-2">
            <CollapseCard title="Thai Elecsensor">
              <h3 className="text-gray-primary text-lg">ติดต่อ</h3>
              <div className="contact-container flex flex-col gap-5 py-2 flex-wrap">
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaFacebookSquare className="fa-icon" size={20} /> :
                  <Link
                    href="https://www.facebook.com/ElecSensor18/"
                    target="_blank"
                  >
                    Thai Elecsensor
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                  <FaMailBulk className="fa-icon" size={20} /> :
                  <p>thaielecsensor@gmail.com</p>
                </div>
              </div>
            </CollapseCard>
            <CollapseCard title="Gravitech Thai">
              <h3 className="text-gray-primary text-lg">ติดต่อ</h3>
              <div className="contact-container flex flex-col gap-5 py-2 flex-wrap">
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaFacebookSquare className="fa-icon" size={20} /> :
                  <Link
                    href="https://www.facebook.com/GravitechThai/"
                    target="_blank"
                  >
                    Gravitechthai
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaGlobe className="fa-icon" size={20} /> :
                  <Link href="https://www.gravitechthai.com/" target="_blank">
                    Gravitech Thai
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg min-w-fit">
                  <FaPhoneAlt className="fa-icon" size={20} /> :
                  <p>088-886-3400, 02-194-0941</p>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                  <FaMailBulk className="fa-icon" size={20} /> :
                  <p>sales@gravitechthai.com</p>
                </div>
              </div>
            </CollapseCard>
            <CollapseCard title="Nex Vertex">
              <h3 className="text-gray-primary text-lg">ติดต่อ</h3>
              <div className="contact-container flex flex-col gap-5 py-2 flex-wrap">
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaFacebookSquare className="fa-icon" size={20} /> :
                  <Link
                    href="https://www.facebook.com/NexVertex/"
                    target="_blank"
                  >
                    Gravitechthai
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaGlobe className="fa-icon" size={20} /> :
                  <Link href="https://www.nexvertex.co.th//" target="_blank">
                    Nex Vertex
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg min-w-fit">
                  <FaPhoneAlt className="fa-icon" size={20} /> :
                  <p>097-939-7465</p>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                  <FaMailBulk className="fa-icon" size={20} /> :
                  <p>sales@nexvertex.co.th</p>
                </div>
              </div>
            </CollapseCard>
          </div>
        </div>
        <hr className="divider" />
        {/* Partner 2 */}
        <div className="detail-container items-center! md:items-start!">
          <div className="detail-content flex-1 md:max-w-5/12">
            <h3 className="text-green-primary text-4xl font-bold text-center md:text-left">
              รายชื่อ System Integrator
            </h3>
            <p className="text-gray-primary mt-4 text-center md:text-left">
              ผู้วางแผนและเชื่อมโยงระบบเทคโนโลยีเกษตรอัจฉริยะให้ทำงานอย่างมีประสิทธิภาพ
            </p>
          </div>
          <div className="detail-content flex flex-col flex-1 gap-2">
            <CollapseCard title="GreenSense">
              <h3 className="text-gray-primary text-lg">ติดต่อ</h3>
              <div className="contact-container flex flex-col gap-5 py-2 flex-wrap">
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaLine className="fa-icon" size={20} /> :
                  <Link
                    href="https://line.me/R/ti/p/@greensense/"
                    target="_blank"
                  >
                    @greensense
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaFacebookSquare className="fa-icon" size={20} /> :
                  <Link
                    href="https://www.facebook.com/greensenseinnovation/"
                    target="_blank"
                  >
                    GreenSense Innovation
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaGlobe className="fa-icon" size={20} /> :
                  <Link href="https://www.greensenseinno.com/" target="_blank">
                    GreenSense Innovation
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg min-w-fit">
                  <FaPhoneAlt className="fa-icon" size={20} /> :
                  <p>098-156-3559</p>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                  <FaMailBulk className="fa-icon" size={20} /> :
                  <p>greensenseinnavation@gmail.com</p>
                </div>
              </div>
            </CollapseCard>
            <CollapseCard title="CLK-D Group">
              <h3 className="text-gray-primary text-lg">ติดต่อ</h3>
              <div className="contact-container flex flex-col gap-5 py-2 flex-wrap">
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg min-w-fit">
                  <FaPhoneAlt className="fa-icon" size={20} /> :
                  <p>065-228-2452</p>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                  <FaMailBulk className="fa-icon" size={20} /> :
                  <p>phaiboon.khomdet@outlook.com</p>
                </div>
              </div>
            </CollapseCard>
            <CollapseCard title="Kit Forward">
              <h3 className="text-gray-primary text-lg">ติดต่อ</h3>
              <div className="contact-container flex flex-col gap-5 py-2 flex-wrap">
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg min-w-fit">
                  <FaPhoneAlt className="fa-icon" size={20} /> :
                  <p>061-914-4698</p>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                  <FaMailBulk className="fa-icon" size={20} /> :
                  <p>contact@kitforward.co.th</p>
                </div>
              </div>
            </CollapseCard>
            <CollapseCard title="Synergy Technology">
              <h3 className="text-gray-primary text-lg">ติดต่อ</h3>
              <div className="contact-container flex flex-col gap-5 py-2 flex-wrap">
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                  <FaFacebookSquare className="fa-icon" size={20} /> :
                  <Link
                    href="https://www.facebook.com/SynergyTechnology/"
                    target="_blank"
                  >
                    Synergy Technology
                  </Link>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg min-w-fit">
                  <FaPhoneAlt className="fa-icon" size={20} /> :
                  <p>081-849-9937</p>
                </div>
                <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                  <FaMailBulk className="fa-icon" size={20} /> :
                  <p>sales@syntechnology.com</p>
                </div>
              </div>
            </CollapseCard>
          </div>
        </div>
        {/* End Content */}
      </div>
    </div>
  );
}
