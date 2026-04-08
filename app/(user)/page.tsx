"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const scrollToAbout = () =>
  document
    .querySelector("#detail-section")
    ?.scrollIntoView({ behavior: "smooth" });

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function Home() {
  const { ref, isVisible } = useInView();
  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center gap-5 bg-white-primary">
      <div className="banner w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl font-normal text-shadow">Welcome to B-Farm</h1>
        <h3 className="text-shadow">
          เทคโนโลยีที่ทำให้การจัดการฟาร์มง่ายขึ้น และมีประสิทธิภาพมากขึ้น
        </h3>
        <button
          onClick={scrollToAbout}
          className="px-5 py-2.5 bg-green-primary-light text-white-primaryrounded-lg shadow-lg hover:scale-110 transition"
        >
          เรียนรู้เกี่ยวกับ B-Farm
        </button>
      </div>
      <div
        ref={ref}
        id="detail-section"
        className={`w-full flex flex-col items-center p-20 scroll-mt-5 transition-all duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="detail-container">
          <div className="detail-content flex-1">
            <Image
              src="/b-farm-about-1.png"
              alt="About B-Farm 1"
              width={500}
              height={300}
              className="detail-image"
            />
          </div>
          <div className="detail-content md:max-w-2xl">
            <h2 className="text-green-accent flex-1 text-5xl font-semibold">
              เกี่ยวกับ B-Farm
            </h2>
            <br />
            <p className="text-green-accent-dark text-xl">
              B-Farm เป็นโปรแกรมที่ใช้ การเขียนโค้ดแบบบล็อก (Block-based
              Programming)
              เพื่อช่วยให้การควบคุมและจัดการฟาร์มอัตโนมัติเป็นเรื่องง่ายและสะดวกสำหรับผู้ใช้งานทุกระดับ
              เพียงแค่ลากและวางบล็อกคำสั่ง
              ผู้ใช้สามารถสร้างโปรแกรมได้อย่างรวดเร็ว
              ลดความซับซ้อนของการเขียนโค้ดแบบดั้งเดิม
            </p>
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-content">
            <p className="text-green-accent-dark text-xl w-full">
              ในยุคดิจิทัลที่เทคโนโลยีมีบทบาทสำคัญในชีวิตประจำวัน
              การเขียนโปรแกรมไม่เพียงแต่เป็นทักษะที่จำเป็นในวงการไอทีเท่านั้น
              แต่ยังช่วยพัฒนาทักษะการคิดเชิงตรรกะและการแก้ปัญหา
              ซึ่งเป็นทักษะสำคัญที่ช่วยให้เราก้าวทันโลกที่เปลี่ยนแปลงอย่างรวดเร็ว
              แต่สำหรับผู้เริ่มต้นหรือผู้ที่ขาดทักษะด้านนี้
              การเรียนรู้การเขียนโค้ดด้วยภาษาโปรแกรมแบบดั้งเดิมอาจดูซับซ้อน
              เข้าใจยาก และอาจท้าทายเกินไป
            </p>
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-content">
            <p className="text-green-accent-dark text-xl w-full">
              B-Farm
              คือเครื่องมือที่ทรงพลังสำหรับการเรียนรู้การเขียนโปรแกรมควบคุมบอร์ด
              HandySense รุ่น Pro อย่างง่ายดายและสะดวกมากยิ่งขึ้น
              โดยเป็นโปรแกรมที่ช่วยลดความซับซ้อนของการเขียนโปรแกรม
              โดยเปลี่ยนคำสั่งทางโปรแกรมให้กลายเป็น “Block คำสั่ง” แบบลากและวาง
              ทำให้ผู้ใช้งานโดยเฉพาะผู้ที่ไม่มีพื้นฐาน
              สามารถเริ่มต้นเรียนรู้การเขียนโปรแกรมได้อย่างรวดเร็ว
            </p>
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-content">
            <p className="text-green-accent-dark text-xl w-full">
              B-Farm
              ไม่เพียงแต่ช่วยให้การเรียนรู้การเขียนโปรแกรมเป็นมิตรและไม่ซับซ้อน
              แต่ยังสนับสนุนการพัฒนาไอเดียและแก้ปัญหาด้วยวิธีที่สร้างสรรค์
              โดยไม่จำเป็นต้องกังวลเรื่องความถูกต้องของโครงสร้างภาษาคอมพิวเตอร์หรือความซับซ้อนของโปรแกรมจริง
              ถือเป็นเครื่องมือที่เหมาะสำหรับทุกเพศทุกวัย ไม่ว่าจะเป็นนักเรียน
              ครู หรือแม้กระทั่งเกษตรกรที่อยากเริ่มต้นเขียนโปรแกรมตั้งแต่ศูนย์
            </p>
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-content flex-1">
            <Image
              src="/b-farm-about-2.png"
              alt="About B-Farm 2"
              width={500}
              height={300}
              className="detail-image"
            />
          </div>
          <div className="detail-content md:max-w-2xl">
            <h2 className="text-green-accent flex-1 text-5xl font-semibold">
              การต่อบล๊อคที่ที่สามารถออกแบบได้ด้วยตัวเอง
            </h2>
            <br />
            <p className="text-green-accent-dark text-xl">
              B-Farm เป็นโปรแกรมสำเร็จรูป (Portable) ที่สามารถติดตั้งลงระบบ
              Windows ใช้เป็นเครื่องมือพัฒนาระบบเกษตรอัจฉริยะในรูปแบบของ Block
              Code ช่วยให้การเขียนโค้ดโปรแกรมทำได้ง่ายเหมือนการต่อจิ๊กซอว์
              เพียงแค่ลาก Block Code ให้ถูกตามรูปแบบที่กำหนด
              และเลือกให้สอดคล้องกับอุปกรณ์ที่ใช้งาน
              ก็จะสามารถเชื่อมต่อคำสั่งไปยังบอร์ด HandySense
              และเซนเซอร์ทางด้านเกษตรอัจฉริยะได้
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
