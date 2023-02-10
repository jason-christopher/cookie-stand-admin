export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center h-screen font-serif bg-green-500'>
          <fieldset autoComplete='off' className='flex flex-col items-center justify-center'>
              <label className="mt-5 mb-1" htmlFor="username">Username</label>
              <input className="px-10 py-1 text-center border border-gray-500 shadow-gray-700 shadow-md rounded-lg" placeholder="username" name="username" />
              <label className="mt-5 mb-1" htmlFor="password">Password</label>
              <input className="px-10 py-1 text-center border border-gray-500 shadow-gray-700 shadow-md rounded-lg" placeholder="password" type="password" name="password" />
              <button className="py-3 px-16 m-4 text-2xl border border-black shadow-md shadow-gray-700 bg-green-700 text-white hover:bg-red-500 hover:text-black hover:rounded-2xl transition-all duration-200 rounded-lg">Sign In</button>
          </fieldset>
      </form>
  );
}
