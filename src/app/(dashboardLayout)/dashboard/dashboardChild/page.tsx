
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import { HiPlus } from "react-icons/hi";

function dashboardChild() {
    return (
        <div className="">
            {/* header  */}
            <div className='flex flex-row justify-between items-center'>
                <div>
                    <Image src="/messageImg.png" width={40} height={40} alt='Message image' className='m-6' />
                </div>
                <div className='pr-6'>
                    <Link href="/dashboard/dashboard">
                      <Button className='bg-blue-500 hover:bg-blue-500'>
                        <HiPlus /> New Workflow
                      </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default dashboardChild