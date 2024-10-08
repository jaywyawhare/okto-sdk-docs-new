import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
    <path d="M13.102 3.10246C13.098 3.09457 13.0912 3.08838 13.083 3.085C12.1321 2.64871 11.1286 2.3376 10.0976 2.15945C10.0882 2.15771 10.0786 2.15897 10.07 2.16304C10.0613 2.16712 10.0542 2.17381 10.0496 2.18215C9.913 2.43016 9.78896 2.68491 9.67799 2.94542C8.56668 2.77672 7.43626 2.77672 6.32495 2.94542C6.21325 2.68425 6.08722 2.42944 5.94743 2.18215C5.94264 2.17399 5.93549 2.16745 5.92693 2.16341C5.91838 2.15936 5.90879 2.15798 5.89944 2.15945C4.86837 2.33722 3.86481 2.64836 2.91401 3.08503C2.90588 3.08848 2.89901 3.09437 2.89436 3.10189C0.992949 5.9414 0.472081 8.71109 0.727601 11.4465C0.72832 11.4532 0.73038 11.4597 0.733658 11.4656C0.736936 11.4715 0.741365 11.4766 0.746683 11.4808C1.85386 12.3006 3.09224 12.9263 4.409 13.3313C4.41827 13.3341 4.42817 13.334 4.43737 13.3309C4.44657 13.3279 4.45463 13.3222 4.46046 13.3144C4.74327 12.9296 4.99386 12.5222 5.20968 12.0962C5.21265 12.0903 5.21434 12.0839 5.21465 12.0774C5.21496 12.0708 5.21388 12.0643 5.21147 12.0582C5.20907 12.0521 5.20541 12.0465 5.20072 12.042C5.19603 12.0374 5.19042 12.0339 5.18426 12.0316C4.7891 11.8804 4.40653 11.6981 4.04016 11.4865C4.0335 11.4826 4.02791 11.4771 4.02388 11.4705C4.01985 11.4639 4.01751 11.4565 4.01705 11.4488C4.0166 11.4411 4.01804 11.4334 4.02127 11.4263C4.02449 11.4193 4.0294 11.4132 4.03554 11.4085C4.11242 11.3509 4.18935 11.291 4.26275 11.2305C4.26928 11.2251 4.27717 11.2217 4.28554 11.2206C4.29391 11.2194 4.30244 11.2207 4.31015 11.2241C6.71042 12.3196 9.30905 12.3196 11.6809 11.2241C11.6886 11.2205 11.6973 11.2191 11.7058 11.2201C11.7143 11.2211 11.7223 11.2245 11.7289 11.2299C11.8023 11.2905 11.8792 11.3509 11.9567 11.4085C11.9629 11.4132 11.9678 11.4192 11.9711 11.4262C11.9744 11.4332 11.9759 11.4409 11.9755 11.4486C11.9751 11.4563 11.9728 11.4638 11.9688 11.4704C11.9648 11.477 11.9593 11.4826 11.9527 11.4865C11.5871 11.6999 11.2042 11.8821 10.808 12.031C10.8018 12.0334 10.7963 12.037 10.7916 12.0416C10.7869 12.0463 10.7833 12.0519 10.781 12.058C10.7786 12.0642 10.7776 12.0707 10.7779 12.0773C10.7783 12.0839 10.78 12.0903 10.7831 12.0962C11.0025 12.5198 11.2527 12.9268 11.5317 13.3138C11.5374 13.3217 11.5454 13.3277 11.5546 13.3308C11.5639 13.3339 11.5738 13.3341 11.5832 13.3312C12.9023 12.9276 14.1428 12.3018 15.2514 11.4808C15.2568 11.4768 15.2613 11.4718 15.2646 11.466C15.2679 11.4602 15.2699 11.4537 15.2705 11.4471C15.5764 8.28466 14.7583 5.53766 13.102 3.10246ZM5.56814 9.78091C4.84548 9.78091 4.25003 9.11774 4.25003 8.30329C4.25003 7.48884 4.83393 6.82562 5.56814 6.82562C6.30809 6.82562 6.89778 7.4946 6.88623 8.30324C6.88623 9.11774 6.3023 9.78091 5.56814 9.78091ZM10.4416 9.78091C9.71895 9.78091 9.1235 9.11774 9.1235 8.30329C9.1235 7.48884 9.7074 6.82562 10.4416 6.82562C11.1816 6.82562 11.7712 7.4946 11.7597 8.30324C11.7597 9.11774 11.1816 9.78091 10.4416 9.78091Z" />
  </svg>
);

const DiscordButton = () => {
  return (
    <Button
      variant="outline" size="icon" className='rounded-full hover:bg-[#F5F6FE] hover:text-[#5166EE]'
      asChild
    >
      <Link href="https://discord.com/invite/okto-916349620383252511"><DiscordIcon/></Link>
    </Button>
  );
};

export default DiscordButton;