import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEarthAsia, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  const nectecUrl = "https://www.nectec.or.th/";
  return (
    <footer className="w-full px-12 py-5 flex flex-col items-center justify-center bg-green-primary-dark text-white-main">
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-6">
        {/* LOGOS */}
        <div className="flex flex-col md:flex-row flex-wrap md:min-w-2/6 items-center md:items-start gap-5">
          <Image
            src="/logo-w-text.png"
            alt="Logo"
            width={180}
            height={64}
            className="w-auto h-auto"
          />
          <Image
            src="/logo-handysense.png"
            alt="Logo"
            width={180}
            height={64}
            className="w-auto h-auto"
          />
          <Image
            src="/logo-nectec.png"
            alt="Logo"
            width={180}
            height={64}
            className="w-auto h-auto"
          />
          <Image
            src="/logo-nstda.png"
            alt="Logo"
            width={180}
            height={64}
            className="w-auto h-auto"
          />
        </div>
        {/* ADDRESS */}
        <div className="flex flex-col gap-5 text-center md:text-left md:min-w-2/6 text-white-primary">
          <h3 className="text-lg font-semibold">ที่อยู่</h3>
          <hr className="border-gray-300" />
          <p className="leading-6">ฝ่ายกลยุทธ์วิจัยและถ่ายทอดเทคโนโลยี (SPD)</p>
          <p className="leading-6">
            ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ (ศอ.)
          </p>
        </div>
        {/* CONTACT */}
        <div className="flex flex-col gap-5 text-center md:text-left md:min-w-2/6 wrap-break-word">
          <h3 className="text-lg font-semibold text-white-primary">
            ติดต่อเรา
          </h3>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-center md:justify-start gap-3 text-white-primary">
            <FaPhone className="fa-icon" />
            <span>02-564-6900 ต่อ 2353</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-white-primary">
            <FaEarthAsia className="fa-icon" />
            <Link href={nectecUrl} target="_blank">
              {nectecUrl}
            </Link>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-white-primary">
            <FaFacebookF className="fa-icon" />
            <span>HandySense Community</span>
          </div>
        </div>
      </div>
      <br />
      <p className="text-white-primary">
        &copy; {new Date().getFullYear()} B-Farm. All rights reserved.
      </p>
    </footer>
  );
}
