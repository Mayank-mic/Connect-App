import getCurrentUser from '@/app/actions/getCurrentUser';

import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';

async function Sidebar({ children }: {
  children: React.ReactNode,
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full bg-gray-900 border border-gray-900">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      
      <main className="lg:pl-20 h-full rounded-lg bg-gray-200 border border-gray-900">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;