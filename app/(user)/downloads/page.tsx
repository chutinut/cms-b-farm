"use client";
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
} from "react-icons/fa";

export default function Downloads() {
  const [downloadRef, downloadVisible] = useInView();

  const sectionClass = (visible: boolean) =>
    `w-full flex flex-col items-center gap-2 p-5 md:p-20 scroll-mt-5
     transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
     ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center gap-5 bg-white-primary">
      <div
        ref={downloadRef}
        id="download-section"
        className={sectionClass(downloadVisible)}
      >
        {/* header 1 */}
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1 flex flex-col justify-center items-center gap-2">
            <h1 className="text-green-primary text-5xl font-bold">B-Farm</h1>
          </div>
        </div>
        <hr className="divider w-11/12!" />
        {/* download 1 */}
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-download-1.png"
              alt="b-farm-download-1"
              width={500}
              height={300}
              className="detail-image"
            />
          </div>
          <div className="detail-content flex-1 md:max-w-2xl">
            <h3 className="text-green-primary text-4xl font-bold">
              B-Farm{" "}
              <span className="text-gray-primary text-2xl italic inline-flex gap-2 items-center">
                Version 1.0.1 <FaWindows className="fa-icon" />
              </span>
            </h3>
            <p className="text-gray-primary text-left mt-4">
              โปรแกรมที่ใช้ การเขียนโค้ดแบบบล็อก (Block-based Programming)
              เพื่อช่วยให้การควบคุมและจัดการฟาร์มอัตโนมัติเป็นเรื่องง่ายและสะดวกสำหรับผู้ใช้งานทุกระดับ
              เพียงแค่ลากและวางบล็อกคำสั่ง
              ผู้ใช้สามารถสร้างโปรแกรมได้อย่างรวดเร็ว
              ลดความซับซ้อนของการเขียนโค้ดแบบดั้งเดิม
            </p>
            <br />
            <Link
              href="https://drive.google.com/drive/folders/1zyRW65ybMHoopRHt2W3IKWer_NFfMOKA"
              target="_blank"
              className="button-download"
            >
              <FaDownload className="fa-icon" size={28} />
              ดาวน์โหลด
            </Link>
          </div>
        </div>
        <br />
        <br />
        {/* header 2 */}
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1 flex flex-col justify-center items-center gap-2">
            <h1 className="text-green-primary text-5xl font-bold text-center">
              B-Farm Solution
            </h1>
          </div>
        </div>
        <hr className="divider w-11/12!" />
        {/* download 2 */}
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-download-2.png"
              alt="b-farm-download-2"
              width={350}
              height={350}
              className="detail-image shadow-none"
            />
          </div>
          <div className="detail-content flex-1 md:max-w-2xl">
            <h3 className="text-green-primary text-4xl font-bold">
              ชุดจ่ายปุ๋ยน้ำอัตโนมัติ
            </h3>
            <p className="text-gray-primary text-left mt-4">
              เครื่องควบคุมสารอาหารสำหรับพืชไฮโดรโปนิกส์
              ระบบควบคุมความเข้มข้นของสารอาหาร (ปุ๋ย) และความเป็นกรด-ด่าง (pH)
              ในระบบปลูกพืชไร้ดิน (Hydroponics) โดยอัตโนมัติ
              เพื่อให้พืชได้รับสารอาหารในปริมาณที่เหมาะสมที่สุดตลอดเวลา
            </p>
            <hr className="divider" />
            <br />
            <h3 className="text-green-primary text-2xl font-bold">
              อุปกรณ์และเซ็นเซอร์ที่ใช้
            </h3>
            <p className="text-gray-primary text-left mt-4">
              • EC / pH / Temperature sensor เชื่อมต่อเข้าช่องสัญญาณ Analog
              ของบอร์ด
              <br />
              • Relay ต่อกับปั๊มจ่ายสารละลาย (A, B, C) และ กรด / เบส
              สำหรับปรับค่า EC และ pH
              <br />• จอ LCD (I2C) ใช้แสดงผลค่าที่วัดได้และสถานะระบบ
            </p>
            <hr className="divider" />
            <br />
            <h3 className="text-green-primary text-2xl font-bold">
              จัดหาอุปกรณ์ - ติดต่อ
            </h3>
            <div className="contact-container flex flex-col md:flex-row gap-5 py-4 flex-wrap">
              <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                <FaGlobe className="fa-icon" size={24} /> :
                <Link href="https://www.greensenseinno.com/" target="_blank">
                  GreenSense
                </Link>
              </div>
              <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                <FaLine className="fa-icon" size={24} /> :
                <Link href="https://line.me/R/ti/p/@greensense" target="_blank">
                  GreenSense
                </Link>
              </div>
            </div>
            <br />
            <Link
              href="http://www.google.com/"
              target="_blank"
              className="button-download"
            >
              <FaDownload className="fa-icon" size={28} />
              ดาวน์โหลด
            </Link>
          </div>
        </div>
        <hr className="divider w-11/12!" />
        {/* download 3 */}
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-download-3.png"
              alt="b-farm-download-3"
              width={500}
              height={500}
              className="detail-image shadow-none w-full!"
            />
          </div>
          <div className="detail-content flex-1 md:max-w-2xl">
            <h3 className="text-green-primary text-4xl font-bold">
              ชุดเลี้ยงผึ้ง
            </h3>
            <p className="text-gray-primary text-left mt-4">
              BeeSense โดยใช้เทคโนโลยี Internet of Things (IoTs)
              ระบบนี้ช่วยให้ผู้เลี้ยงผึ้งสามารถติดตามสถานะได้จากระยะไกล
              ลดความสูญเสีย และเพิ่มประสิทธิภาพการจัดการฟาร์มผึ้ง
              ลดความเสี่ยงจากปัจจัยสิ่งแวดล้อมและโรค เพื่อให้ผู้เลี้ยงผึ้งสามารถ
              ตรวจสอบข้อมูลรังผึ้งแบบเรียลไทม์ผ่านมือถือ เช่น
              ตรวจสอบปริมาณน้ำผึ้งในรังแบบเรียลไทม์ ,
              อุณหภูมิและความชื้นภายในรัง , เสียงกิจกรรมของผึ้ง
            </p>
            <hr className="divider" />
            <br />
            <h3 className="text-green-primary text-2xl font-bold">
              อุปกรณ์และเซ็นเซอร์ที่ใช้
            </h3>
            <p className="text-gray-primary text-left mt-4">
              • Weight Sensor (RS485) – ใช้วัดน้ำหนักของน้ำผึ้งในรัง
              <br />
              • H/T Sensor (Humidity & Temperature) – ตรวจวัดอุณหภูมิและความชื้น
              <br />
              • Sound Sensor – ตรวจจับเสียงภายในรัง เพื่อประเมินพฤติกรรมของผึ้ง
              <br />
              • SW36 Switch – ใช้สำหรับ “Set Zero”
              เพื่อปรับค่าเริ่มต้นของน้ำหนัก
              <br />• บอร์ด HandySense / B-Farm Block –
              เป็นชุดควบคุมกลางที่รับข้อมูลจากเซ็นเซอร์
            </p>
            <hr className="divider" />
            <br />
            <h3 className="text-green-primary text-2xl font-bold">
              จัดหาอุปกรณ์ - ติดต่อ
            </h3>
            <p className="text-gray-primary text-left mt-4">
              ฝ่ายพัฒนาเครือข่ายเชิงกลยุทธ์และประเมินผล (SPE)
              ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ
            </p>
            <div className="contact-container flex flex-col md:flex-row gap-5 py-4 flex-wrap">
              <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg min-w-fit">
                <FaPhoneAlt className="fa-icon" size={24} /> :<p>02-564-6900</p>
              </div>
              <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg">
                <FaMailBulk className="fa-icon" size={24} /> :
                <p>business@nectec.or.th</p>
              </div>
              <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                <FaGlobe className="fa-icon" size={24} /> :
                <Link href="https://www.nectec.or.th/" target="_blank">
                  www.nectec.or.th
                </Link>
              </div>
            </div>
            <br />
            <Link
              href="https://gitlab.nectec.or.th/puttepongsukrat/plugin_bfarm/-/raw/main/BeeSense.zip"
              target="_blank"
              className="button-download"
            >
              <FaDownload className="fa-icon" size={28} />
              ดาวน์โหลด
            </Link>
          </div>
        </div>
        <hr className="divider w-11/12!" />
        {/* download 4 */}
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1 flex justify-center">
            <Image
              src="/b-farm-download-4.png"
              alt="b-farm-download-4"
              width={500}
              height={500}
              className="detail-image w-full!"
            />
          </div>
          <div className="detail-content flex-1 md:max-w-2xl">
            <h3 className="text-green-primary text-4xl font-bold">
              ชุดการปลูกข้าวเปียกสลับแห้ง (AWD)
            </h3>
            <p className="text-gray-primary text-left mt-4">
              Alternate Wetting and Drying (AWD) เป็นเทคนิคการประหยัดน้ำในนาข้าว
              โดยควบคุมระดับน้ำในแปลงนาให้มีช่วงน้ำขัง
              กับช่วงน้ำแห้งสลับกันในช่วงเวลาที่เหมาะสม
              เพื่อกระตุ้นให้รากและลำต้นของต้นข้าวแข็งแรงขึ้น
              เนื่องจากดินและรากได้รับอากาศพอ
              ทำให้สามารถดูดปุ๋ยได้ดีขึ้นอีกทั้งยังลดการใช้ปุ๋ยและลดการปล่อยก๊าซเรือนกระจกโดยเฉพาะก๊าซมีเทนและไนตรัสอ๊อกไซด์ที่เป็นสาเหตุหลักที่ทำให้เกิดโลกร้อน
            </p>
            <hr className="divider" />
            <br />
            <h3 className="text-green-primary text-2xl font-bold">
              อุปกรณ์และเซ็นเซอร์ที่ใช้
            </h3>
            <p className="text-gray-primary text-left mt-4">
              • เซ็นเซอร์วัดอุณหภูมิและความชื้นอากาศ - I2C
              <br />
              • เซ็นเซอร์วัดปริมาณน้ำฝน - RS485
              <br />
              • เซ็นเซอร์อัลตร้าโซนิค - RS485
              <br />
            </p>
            <hr className="divider" />
            <br />
            <h3 className="text-green-primary text-2xl font-bold">
              จัดหาอุปกรณ์ - ติดต่อ
            </h3>
            <div className="contact-container flex flex-col md:flex-row gap-5 py-4 flex-wrap">
              <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                <FaGlobe className="fa-icon" size={24} /> :
                <Link href="https://www.greensenseinno.com/" target="_blank">
                  GreenSense
                </Link>
              </div>
              <div className="contact-wrapper inline-flex items-center gap-2 text-gray-primary text-lg hyperlink">
                <FaLine className="fa-icon" size={24} /> :
                <Link href="https://line.me/R/ti/p/@greensense" target="_blank">
                  GreenSense
                </Link>
              </div>
            </div>
            <br />
            <Link
              href="https://gitlab.nectec.or.th/puttepongsukrat/plugin_bfarm/-/raw/main/BeeSense.zip"
              target="_blank"
              className="button-download"
            >
              <FaDownload className="fa-icon" size={28} />
              ดาวน์โหลด
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
