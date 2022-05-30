import Header from "components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
      <Header/>
        <main>
          <div className="max-w7x mx-auto py-6 sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </>
  );
}
