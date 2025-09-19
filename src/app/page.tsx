import { LinktreeSections } from "@/components/ui/linktree-sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl ring-4 ring-pink-200 dark:ring-pink-800">
            YN
          </div>
          <h1 className="text-3xl font-bold mb-2 text-pink-900 dark:text-pink-100">Cristal Rivera</h1>
          <p className="text-pink-700 dark:text-pink-300 text-lg mb-4">
            Founder • Developer • Community Curator
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 border border-pink-300 dark:border-pink-700 text-pink-800 dark:text-pink-200 text-sm font-medium shadow-sm">
            💖 Available for collaborations
          </div>
        </div>

        <LinktreeSections />

      </div>
    </div>
  );
}
