import Link from 'next/link';
import AuthPageShell from '../../components/AuthPageShell';
import ForgotPasswordCard from '../../components/auth/ForgotPasswordCard';

export default function Page() {
  return (
    <AuthPageShell>
      <div className={"text-center mb-4"}>
        <span className={"badge-green mb-2"}><i className={"bi bi-key"}></i> Account Recovery</span>
        <h3 className={"fw-bold text-white mb-1"}>Forgot Password</h3>
        <p className={"text-secondary small"}>Enter your email and we will email you a reset code.</p>
      </div>
      <ForgotPasswordCard />
      <div className={"text-center text-secondary small mt-3"} style={{fontSize: "12px"}}>
        Remembered it? <Link href={"/login"} className={"text-success text-decoration-none fw-semibold"}>Back to login</Link>
      </div>
    </AuthPageShell>
  );
}
