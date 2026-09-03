import Script from 'next/script';
import DashboardChrome from '../../components/DashboardChrome.jsx';
import Link from 'next/link';
import SettingsContent from '../../components/profile/SettingsContent';

export default function Page() {
  return (
    <>



    
    
    
    
    
    
    
    




<DashboardChrome />

	<SettingsContent />
	
	
	
	


<Script src={"/assets/next/settings-boot.js"} strategy="afterInteractive" />
    </>
  );
}
