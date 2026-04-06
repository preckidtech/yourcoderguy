import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white dark:bg-zinc-950">
      <h1 className="font-bold text-blue-600 text-9xl dark:text-blue-500">
        404
      </h1>
      
      <p className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        System Error: Route not found.
      </p>
      
      <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400">
        It looks like you've stumbled into an uncompiled directory. 
        Don't worry, even the best code has bugs.
      </p>
      
      {/* Visual Terminal Element */}
      <div className="w-full max-w-sm p-5 mt-8 text-sm text-left text-green-400 bg-black border border-gray-800 rounded-lg shadow-2xl font-mono">
        <p className="select-none">
          <span className="text-gray-500 mr-2">$</span>
          locate_page("requested_url")
        </p>
        <p className="text-red-500 mt-1">
           Error: NULL_POINTER_EXCEPTION
        </p>
        <p className="mt-1 select-none">
          <span className="text-gray-500 mr-2">$</span>
          initiating_recovery_protocol
          <span className="animate-pulse">_</span>
        </p>
      </div>

      <Link 
        href="/" 
        className="px-8 py-3 mt-10 text-sm font-medium text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
      >
        Return to Production (Home)
      </Link>
    </main>
  );
}