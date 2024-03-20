import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <div>
        <Image
          src="/images/TransferMarketLogo.png"
          alt=" transferMarket Logo - Dark"
          width={200}
          height={65}
          className="mb-4 hidden dark:block"
        />
         <Image
          src="/images/WhiteLogo.png"
          alt="transferMarket Logo- Light"
          width={200}
          height={65}
          className="mb-4 dark:hidden"
        />
      </div>
    </Link>
  );
}