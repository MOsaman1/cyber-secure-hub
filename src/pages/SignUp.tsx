
import AuthLayout from "@/components/auth/AuthLayout";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUp() {
  return (
    <AuthLayout 
      title="Create your account" 
      subtitle="Join CyberSecure Hub for the latest in cybersecurity"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
