import Head from 'next/head';

const TopCroissants = [
  {
    name: "Swedish Hill Bakery",
    location: "1120 W 6th St, Austin, TX 78703",
    url: "https://swedishhillaustin.com/",
    tastingNotes: "The perfect balance of flakiness and butter. Each bite slightly moist.",
    rank: 5,
  },
  {
    name: "Elizabeth Street Cafe",
    location: "1501 S. First Street, Austin, Texas 78704",
    url: "https://elizabethstreetcafe.com/austin/",
    tastingNotes: "So good they even have a private dining room named after it. Sadly not open for breakfast though.",
    rank: 4,
  },
  {
    name: "La Patisserie",
    location: "602 W. Annie St. Austin, Texas 78704",
    url: "https://www.lpaustin.com/",
    tastingNotes: "A decidedly sweeter taste than is traditional, but still very enjoyable.",
    rank: 3,
  },
  {
    name: "Easy Tiger",
    location: "Several",
    url: "https://www.easytigerusa.com/",
    tastingNotes: "Excellent layering but can be more dry than is desirable.",
    rank: 2,
  },
  {
    name: "Mañana",
    location: "1603 s. congress ave, austin, texas 78704",
    url: "https://mananaaustin.com/south-congress",
    tastingNotes: "A little hit or miss, but it makes the list.",
    rank: 1,
  },
];



export default function Home() {
  const sortedCroissants = [...TopCroissants].sort((a, b) => b.rank - a.rank);

  return (
    <>
      <Head>
        <title>Austin's Top Croissant</title>
      </Head>
      <div className="min-h-screen text-black font-sans">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-6xl font-semibold mb-10 font-display">Austin's Top Croissant</h1>
          <table className="mx-auto w-full text-left border-collapse text-lg">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Tasting Notes</th>
              </tr>
            </thead>
            <tbody>
              {sortedCroissants.map((croissant, index) => (
                <tr key={index} className="border-b text-xl">
                  <td className="px-4 py-2 whitespace-nowrap">{'🥐'.repeat(croissant.rank)}</td>
                  <td className="px-4 py-2 whitespace-nowrap font-semibold">
                    <a href={croissant.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      {croissant.name}
                    </a>
                  </td>
                  <td className="px-4 py-2">
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(croissant.location)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      {croissant.location}
                    </a>
                  </td>
                  <td className="px-4 py-2">{croissant.tastingNotes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
