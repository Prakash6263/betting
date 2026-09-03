import Link from 'next/link';
import { Suspense } from 'react';
import AuthPageShell from '../../components/AuthPageShell';
import ResetScreen from '../../components/auth/ResetScreen';

export default function Page() {
  return (
    <AuthPageShell>
      <div className={"text-center mb-4"}>
        <span className={"badge-green mb-2"}><i className={"bi bi-lock"}></i> Reset Password</span>
        <h3 className={"fw-bold text-white mb-1"}>Create New Password</h3>
        <p className={"text-secondary small"}>Enter the reset code and choose a new password.</p>
      </div>
      <Suspense fallback={<div className={"text-center text-secondary small py-3"}>Loading...</div>}>
        <ResetScreen />
      </Suspense>
      <div className={"text-center text-secondary small mt-3"} style={{fontSize: "12px"}}>
        Remembered it? <Link href={"/login"} className={"text-success text-decoration-none fw-semibold"}>Back to login</Link>
      </div>
    </AuthPageShell>
  );
}

