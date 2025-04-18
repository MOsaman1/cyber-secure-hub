
import AuthLayout from "@/components/auth/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <AuthLayout 
      title="Reset your password" 
      subtitle="We'll send you instructions to reset your password"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
