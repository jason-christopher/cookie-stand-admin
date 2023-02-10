import { useAuth } from "@/contexts/auth";

export default function Header() {

  const { user, login} = useAuth();

  return (
    <header className='flex justify-between items-center font-serif p-4 bg-green-300 text-black'>
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        <section>
          <button className="px-4 py-2 mx-5 text-2xl bg-green-500 text-black rounded-lg">{user.username}</button>
          <button className="px-4 py-2 mr-20 text-2xl bg-green-800 text-white hover:bg-green-500 hover:text-black transition-all duration-200 rounded-lg">Logout</button>
        </section>
    </header>
  );
}
