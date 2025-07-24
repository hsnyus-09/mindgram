import React, { useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "./firebase";

const actionCodeSettings = {
  url: window.location.origin + "/finishSignIn",
  handleCodeInApp: true,
};

export default function EmailLinkLoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setSent(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSend} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">이메일 링크 로그인</h2>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="이메일 입력"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2">로그인 링크 전송</button>
        {sent && <div className="text-green-600 text-sm">이메일로 링크를 보냈습니다!</div>}
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </div>
    </form>
  );
} 