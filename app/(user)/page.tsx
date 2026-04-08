"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import {
  FaFileCode,
  FaGraduationCap,
  FaGamepad,
  FaUsers,
  FaPuzzlePiece,
  FaLeaf,
  FaCloudArrowUp,
} from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";

const scrollToAbout = () =>
  document
    .querySelector("#about-section")
    ?.scrollIntoView({ behavior: "smooth" });

export default function Home() {
  const [aboutRef, aboutVisible] = useInView();
  const [featureRef, featureVisible] = useInView();
  const [aboutHandySenseRef, aboutHandySenseVisible] = useInView();
  const [feature2Ref, feature2Visible] = useInView();
  const [exampleRef, exampleVisible] = useInView();

  const sectionClass = (visible: boolean) =>
    `w-full flex flex-col items-center p-20 scroll-mt-5
     transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
     ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center gap-5 bg-white-primary">
      {/* Banner */}
      <div className="banner w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl font-normal text-shadow">Welcome to B-Farm</h1>
        <h3 className="text-shadow">
          เทคโนโลยีที่ทำให้การจัดการฟาร์มง่ายขึ้น และมีประสิทธิภาพมากขึ้น
        </h3>
        <button
          onClick={scrollToAbout}
          className="px-5 py-2.5 bg-green-primary-light text-white-primary rounded-lg shadow-lg hover:scale-110 transition"
        >
          เรียนรู้เกี่ยวกับ B-Farm
        </button>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        id="about-section"
        className={sectionClass(aboutVisible)}
      >
        <div className="detail-container">
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-about-1.png"
              alt=""
              width={500}
              height={300}
              className="detail-image"
            />
          </div>
          <div className="detail-content md:max-w-2xl">
            <h2 className="text-green-accent text-5xl font-bold">
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
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-about-2.png"
              alt=""
              width={500}
              height={300}
              className="detail-image"
            />
          </div>
          <div className="detail-content md:max-w-2xl">
            <h2 className="text-green-accent text-5xl font-bold">
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

      {/* Feature Section */}
      <div
        ref={featureRef}
        id="feature-section"
        className={sectionClass(featureVisible) + " bg-green-primary-dark"}
      >
        <div className="detail-container flex-col!">
          <div className="detail-content text-center">
            <h2 className="text-white-primary text-4xl font-semibold">
              จุดเด่นของ B-Farm
            </h2>
            <br />
            <p className="text-gray-primary-light text-lg">
              B-Farm
              เป็นเครื่องมือที่ใครหลายคนเลือกใช้เพื่อนำไปเป็นจุดเริ่มต้นในเส้นทางเขียนโปรแกรมควบคุมบอร์ด
              HandySense Pro ได้ง่ายและสะดวกราบรื่นยิ่งขึ้น
            </p>
          </div>
          <div className="detail-content">
            <div className="cards">
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaFileCode className="text-green-primary-dark" size={48} />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  การลดความซับซ้อนของ โครงสร้างภาษาในการเขียนโปรแกรม
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  มีการใช้แนวทาง การลากและวาง Block เพื่อสร้างคำสั่งโปรแกรม
                  โดยแต่ละ Block แทนคำสั่งที่กำหนดไว้ล่วงหน้า
                  <br />
                  ผู้ใช้ไม่ต้องกังวลเรื่องโครงสร้างทางภาษาคอมพิวเตอร์ที่จะผิดพลาด
                  เช่น ลืมปิดวงเล็บ หรือใส่เครื่องหมายผิด
                </p>
              </div>
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaGraduationCap
                    className="text-green-primary-dark"
                    size={48}
                  />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  ช่วยในการเรียนรู้แนวคิดการเขียนโปรแกรม
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  ออกแบบมาให้เข้าใจง่ายเหมาะสำหรับผู้ไม่มีพื้นฐาน เช่น
                  ผู้เริ่มต้นในสายงานนี้ และเกษตรกรมือใหม่
                  <br />
                  ช่วยแนะนำ ตรรกะเชิงโปรแกรมมิ่ง (Programming Logic) เช่น
                  การควบคุมลูปและเงื่อนไข
                </p>
              </div>
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaGamepad className="text-green-primary-dark" size={48} />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  ประสบการณ์ใช้งานที่เป็นมิตรและมีความสนุก
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  อินเทอร์เฟซที่เป็นมิตรกับผู้ใช้และการออกแบบแบบเกม
                  (Gamification)
                </p>
              </div>
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaUsers className="text-green-primary-dark" size={48} />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  เหมาะสำหรับการศึกษาและผลักดันให้เกิดการพัฒนาร่วมกัน
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  ทำให้นักพัฒนาหรือองค์กรสามารถนำไปใช้งานหรือปรับแต่งเพื่อให้เหมาะสมกับการใช้งานของตัวเอง
                  โดยเปิดโอกาสให้ผู้ใช้สร้างกิจกรรมแบบปรับแต่งเองได้
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About HandySense Section */}
      <div
        ref={aboutHandySenseRef}
        id="about-handysense-section"
        className={sectionClass(aboutHandySenseVisible)}
      >
        <div className="detail-container">
          <div className="detail-content md:max-w-2xl">
            <h2 className="text-green-accent text-5xl font-bold">
              การใช้งานร่วมกับ HandySense
            </h2>
            <br />
            <p className="text-green-accent-dark text-xl">
              B-Farm ถูกออกแบบมาให้ทำงานร่วมกับ HandySense
              บอร์ดไมโครคอนโทรลเลอร์สำหรับเกษตรอัจฉริยะ
              หลังจากสร้างคำสั่งในรูปแบบบล็อก โปรแกรมจะถูกแปลงและอัปโหลดไปยัง
              HandySense เพื่อควบคุมระบบในฟาร์ม เช่น
              ระบบรดน้ำอัตโนมัติหรือการวัดค่าจากเซนเซอร์
              ช่วยเพิ่มประสิทธิภาพและลดความยุ่งยากในการจัดการฟาร์ม
            </p>
          </div>
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-about-3.png"
              alt=""
              width={350}
              height={350}
              className="detail-image shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Feature 2 Section */}
      <div
        ref={feature2Ref}
        id="feature-section"
        className={sectionClass(feature2Visible) + " bg-green-primary-dark"}
      >
        <div className="detail-container flex-col!">
          <div className="detail-content text-center">
            <h2 className="text-white-primary text-4xl font-semibold">
              คุณสมบัติ B-Farm
            </h2>
            <br />
            <p className="text-gray-primary-light text-lg">
              เทคโนโลยีที่ทำให้การจัดการฟาร์มง่ายขึ้นและมีประสิทธิภาพมากขึ้น
            </p>
          </div>
          <div className="detail-content">
            <div className="cards">
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaPuzzlePiece
                    className="text-green-primary-dark"
                    size={48}
                  />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  การเขียนโค้ดแบบบล็อก (Block-based Coding)
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  ผู้ใช้สามารถสร้างโปรแกรมควบคุมการทำงานของฟาร์มได้ง่าย ๆ
                  โดยไม่ต้องกังวลเรื่องไวยากรณ์ของภาษาคอมพิวเตอร์
                  ลดความผิดพลาดและทำให้เข้าใจคำสั่งได้ง่ายขึ้น
                </p>
              </div>
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaLeaf className="text-green-primary-dark" size={48} />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  รองรับการควบคุมเซ็นเซอร์หลากหลายชนิด
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  สามารถเชื่อมต่อและสั่งการเซ็นเซอร์ภายในฟาร์มได้ เช่น
                  เซ็นเซอร์วัดอุณหภูมิ ความชื้นในดิน เซ็นเซอร์วัดความชื้นในอากาศ
                  หรือเซ็นเซอร์แสง ทำให้การเพาะปลูกแม่นยำและมีประสิทธิภาพมากขึ้น
                </p>
              </div>
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaCloudArrowUp
                    className="text-green-primary-dark"
                    size={48}
                  />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  อัปโหลดโค้ดไปยังบอร์ด HandySense ได้โดยตรง
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  เพียงเชื่อมต่อบอร์ดกับคอมพิวเตอร์แล้วกดอัปโหลด
                  ก็สามารถใช้งานจริงได้ทันที
                  โดยไม่ต้องมีพื้นฐานการเขียนโปรแกรมเชิงเทคนิคขั้นสูง
                </p>
              </div>
              <div className="card bg-white-primary">
                <div className="flex justify-center bg-transparent">
                  <FaCogs className="text-green-primary-dark" size={48} />
                </div>
                <h3 className="text-lg font-bold text-black-primary mt-4">
                  ความยืดหยุ่นในการปรับแต่ง
                </h3>
                <p className="text-gray-primary text-center mt-4">
                  ผู้ใช้สามารถปรับแก้ สร้าง
                  หรือเพิ่มเติมฟังก์ชันการทำงานได้ตามต้องการ
                  ตอบโจทย์การทำงานในหลากหลายสภาพแวดล้อมและรูปแบบการเพาะปลูกของฟาร์มแต่ละแห่ง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Section */}
      <div
        ref={exampleRef}
        id="about-handysense-section"
        className={sectionClass(exampleVisible)}
      >
        <div className="detail-container">
          <div className="detail-content md:max-w-2xl">
            <h2 className="text-green-accent text-5xl font-bold">
              ตัวอย่างการประยุกต์ใช้งาน
              <br />
              B-Farm พัฒนาระบบฟาร์มอัจฉริยะต่าง ๆ อาทิเช่น
            </h2>
            <br />
            <p className="text-green-accent-dark text-xl">
              <b>ระบบรดน้ำอัตโนมัติ:</b>&nbsp;
              เมื่อเซนเซอร์วัดค่าความชื้นในดินต่ำกว่าค่าที่กำหนด
              ระบบจะสั่งให้ปั๊มน้ำทำงาน และหยุดทำงานเมื่อดินมีความชื้นที่เหมาะสม
              <br />
              <br />
              <b>ระบบควบคุมอุณหภูมิในโรงเรือน:</b>&nbsp;
              ใช้เซนเซอร์วัดอุณหภูมิร่วมกับพัดลมและฮีตเตอร์
              ระบบจะปรับอุณหภูมิในโรงเรือนให้อยู่ในช่วงที่เหมาะสมกับพืช
              <br />
              <br />
              <b>ระบบจัดการแสงไฟเสริม:</b>&nbsp; เปิดไฟ LED
              เมื่อค่าความเข้มของแสงต่ำเกินไปในช่วงเวลาสำคัญของการสังเคราะห์แสง
              <br />
              <br />
              <b>แจ้งเตือนผ่าน IoT:</b>&nbsp;
              แจ้งเตือนผ่านแอปพลิเคชันเมื่อค่าต่างๆ อยู่ในระดับผิดปกติ เช่น
              ความชื้นในดินต่ำเกินไป หรืออุณหภูมิในโรงเรือนสูงเกินไป
            </p>
          </div>
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-about-4.png"
              alt=""
              width={350}
              height={400}
              className="detail-image shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
