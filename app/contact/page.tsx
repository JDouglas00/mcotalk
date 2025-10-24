export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <ul className="space-y-6 text-lg">
          <li>
            <div className="font-semibold">Lindsay Leeds</div>
            <div><a className="text-blue-600 hover:underline" href="mailto:lindsayleeds@gmail.com">lindsayleeds@gmail.com</a></div>
            <div><a className="text-blue-600 hover:underline" href="tel:+14236659277">(423) 665-9277</a></div>
          </li>
          <li>
            <div className="font-semibold">Jonathan Douglas</div>
            <div><a className="text-blue-600 hover:underline" href="mailto:jpdouglas915@gmail.com">jpdouglas915@gmail.com</a></div>
            <div><a className="text-blue-600 hover:underline" href="tel:+14237156300">(423) 715-6300</a></div>
          </li>
        </ul>
      </div>
    </main>
  );
}
