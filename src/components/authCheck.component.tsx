'use client'
import { useAppData } from '@/context/context';
export function AuthCheck({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const { data } = useAppData();

    
    const { user } = data
    return (
        <div>
            {
                user =="true"? children : <div className="text-center py-4 text-sm">You are Not Authorized Here</div>
            }
        </div>
    );
}
