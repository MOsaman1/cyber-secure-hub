
import AuthLayout from "@/components/auth/AuthLayout";
import SignInForm from "@/components/auth/SignInForm";

export default function SignIn() {
  return (
    <AuthLayout 
      title="Welcome back" 
      subtitle="Sign in to access your secured CyberSecure Hub account"
    >
      <SignInForm />
    </AuthLayout>
  );
}
