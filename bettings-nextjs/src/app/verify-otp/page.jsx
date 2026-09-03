import Link from 'next/link';
import { Suspense } from 'react';
import AuthPageShell from '../../components/AuthPageShell';
import VerifyScreen from '../../components/auth/VerifyScreen';

export default function Page() {
  return (
    <AuthPageShell>
      <div className={"text-center mb-4"}>
        <span className={"badge-green mb-2"}><i className={"bi bi-shield-check"}></i> Email Verification</span>
        <h3 className={"fw-bold text-white mb-1"}>Enter Verification Code</h3>
        <p className={"text-secondary small"}>We emailed a 6-digit code to your inbox.</p>
      </div>
      <Suspense fallback={<div className={"text-center text-secondary small py-3"}>Loading...</div>}>
        <VerifyScreen />
      </Suspense>
      <div className={"text-center text-secondary small mt-3"} style={{fontSize: "12px"}}>
        Need another account? <Link href={"/register"} className={"text-success text-decoration-none fw-semibold"}>Sign up</Link>
      </div>
    </AuthPageShell>
  );
}

