import { ThemeToggle } from "@/components/ThemeToggle"
import { ExampleClientComponent } from "./ExampleClientComponent"

export default function Home() {
  // await getServerSession(authOptions);

  return (
    <div>
      <p className="text-3xl font-bold underline">Hello Tailwind!</p>
      <ExampleClientComponent />
      <ThemeToggle />
    </div>
  )
}
