import MainHeading from "@/components/text-components/main-heading"

export default function Home() {
  return (
    <>
      <MainHeading>CRUD med MongoDB & NextJS</MainHeading>
      <p>Denne app viser et fuldt CRUD - Create, Read, Update, Delete.</p>
      <p>For at bruge appen, skal du sørge for at du har en MongoDB database.</p>
      <p>Indsæt din MongoDB URI i <code>.env.local</code> filen.</p>
      <p>Se mere i <code>README.md</code> filen.</p>
    </>
  )
}
