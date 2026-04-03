import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEarthAsia, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
    const nectecUrl = "https://www.nectec.or.th/";
    return (
        <footer className="w-full px-12 py-5 flex flex-col items-center justify-center bg-green-secondary text-white-main">
            <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-6">
                {/* LOGOS */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Image src="/logo-w-text.png" alt="Logo" width={180} height={64} />
                    <Image src="/logo-handysense.png" alt="Logo" width={180} height={64} />
                    <Image src="/logo-nectec.png" alt="Logo" width={180} height={64} />
                    <Image src="/logo-nstda.png" alt="Logo" width={180} height={64} />
                </div>
                {/* ADDRESS */}
                <div className="flex flex-col gap-4 text-center md:text-left max-w-md">
                    <h3 className="text-lg font-semibold">ที่อยู่</h3>
                    <hr className="border-gray-300" />
                    <p className="leading-6">
                        ฝ่ายกลยุทธ์วิจัยและถ่ายทอดเทคโนโลยี (SPD)
                    </p>
                    <p className="leading-6">
                        ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ (ศอ.)
                    </p>
                </div>
                {/* CONTACT */}
                <div className="flex flex-col gap-4 text-center md:text-left min-w-80">
                    <h3 className="text-lg font-semibold">ติดต่อเรา</h3>
                    <hr className="border-gray-300" />
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <FaPhone className="fa-icon" />
                        <span>02-564-6900 ต่อ 2353</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <FaEarthAsia className="fa-icon" />
                        <Link href={nectecUrl} target="_blank">{nectecUrl}</Link>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <FaFacebookF className="fa-icon" />
                        <span>HandySense Community</span>
                    </div>
                </div>
            </div>
            <br />
            <p>&copy; {new Date().getFullYear()} B-Farm. All rights reserved.</p>
        </footer>
    );
}