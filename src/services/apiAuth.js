
import supabase from "./supabase";
import { appURL } from "../_shared/appURL";

export async function signup({ username, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${appURL}/welcome`,
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

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${appURL}/welcome`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function loginWithGoogle() {
 
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${appURL}/welcome`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}


export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ username, avatar, password }) {
  //1.Update password OR username
  let updateData;
  if (password) updateData = { password };
  if (username) updateData = { data: { username } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  //2. Upload avatar
  const fileName = `avatar-${data.user.id}`;

  await supabase.storage.from("avatars").remove([fileName]);

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar,{upsert:true});

  if (storageError) throw new Error(storageError.message);

  //3. Update user data with avatar
  const newAvatarUrl = `https://ahdmlbskstpzshobwtvq.supabase.co/storage/v1/object/public/avatars/${fileName}`;
  const { data: updatedUserData, error: userDataError } =
    await supabase.auth.updateUser({
      data: {
        avatar: newAvatarUrl,
      },
    });
  if (userDataError) throw new Error(userDataError.message);
  return updatedUserData;
}


