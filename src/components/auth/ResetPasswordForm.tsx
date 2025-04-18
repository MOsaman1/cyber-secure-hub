
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate password reset email
    // Note: For real functionality, Supabase integration is needed
    try {
      // Mock successful password reset request
      setTimeout(() => {
        setResetSent(true);
        toast({
          title: "Password Reset Email Sent",
          description: "Check your inbox for further instructions",
        });
      }, 1500);
    } catch (err) {
      setError("Failed to send password reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (resetSent) {
    return (
      <div className="space-y-6">
        <div className="bg-cyber-primary/10 p-6 rounded-lg text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-cyber-accent flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-cyber-primary">Check Your Email</h3>
          <p className="text-gray-600 mt-2">
            We've sent password reset instructions to <strong>{email}</strong>
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Please check your inbox and follow the link to reset your password.
          </p>
        </div>
        <div className="text-center">
          <Link to="/signin" className="text-cyber-accent hover:underline">
            Return to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          required
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-cyber-primary hover:bg-cyber-secondary text-white"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Reset Instructions"}
      </Button>

      <div className="text-center text-sm">
        <span>Remember your password? </span>
        <Link to="/signin" className="font-medium text-cyber-accent hover:underline">
          Back to Sign In
        </Link>
      </div>
    </form>
  );
}
