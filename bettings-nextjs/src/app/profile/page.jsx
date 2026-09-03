import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';
import ProfileContent from '../../components/profile/ProfileContent';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<DashboardChrome />

	<ProfileContent />
	
	
	
	


<Script src={"/assets/next/profile-boot.js"} strategy="afterInteractive" />
    </>
  );
}
