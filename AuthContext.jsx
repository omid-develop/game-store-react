import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; // مطمئن شو مسیر درست باشد

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // شنیدن تغییرات لاگین یا لاگ‌اوت
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });

        // تمیز کردن لیسنر هنگام آن‌ماونت شدن کامپوننت
        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

// ایجاد یک هوک برای استفاده از کانتکست
export const useAuth = () => useContext(AuthContext);
