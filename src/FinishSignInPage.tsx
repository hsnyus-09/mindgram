import React, { useEffect, useState } from "react";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export default function FinishSignInPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let emailForSignIn = window.localStorage.getItem("emailForSignIn");
      if (!emailForSignIn) {
        // 사용자가 직접 입력하도록
        return;
      }
      signInWithEmailLink(auth, emailForSignIn, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          setDone(true);
          setTimeout(() => navigate("/"), 1000);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [navigate]);

  // localStorage에 emailForSignIn이 없으면 입력 폼을 보여줌
  if (!window.localStorage.getItem("emailForSignIn")) {
    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await signInWithEmailLink(auth, email, window.location.href);
            window.localStorage.removeItem("emailForSignIn");
            setDone(true);
            setTimeout(() => navigate("/"), 1000);
          } catch (err: any) {
            setError(err.message);
          }
        }}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">이메일로 로그인</h2>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="이메일 입력"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2">로그인</button>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
      </form>
    );
  }

  return done ? <div className="min-h-screen flex items-center justify-center text-green-600 text-xl">로그인 성공!</div> : <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">로그인 처리 중...</div>;
} 