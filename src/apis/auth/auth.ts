import { supabase } from "@/process";

type SignupProps = {
  email: string;
  password: string;
};

export const signup = async ({ email, password }: SignupProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {},
  });
};

export const login = async ({ email, password }: SignupProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
};
