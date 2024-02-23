import supabase from "./supabase";

export async function signup({ username, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:5173/dashboard",
      data: {
        username,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function loginWithGithub() {
  console.log("Attempting to login with Github")
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: "github",
  options: {
    redirectTo: "http://localhost:5173/dashboard",
  },
});
 

  if (error) {
    console.log("Github login error",error)
    throw new Error(error.message);
  }
  
  console.log("Github login success - auth",data)
  return data;

}

export async function getCurrentUser() {
 const {data:session} =  await supabase.auth.getSession();


 if (!session.session) return null;

 const { data, error } = await supabase.auth.getUser()

  if (error) throw new Error(error.message);
 
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
