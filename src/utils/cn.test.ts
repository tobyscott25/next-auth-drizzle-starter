import { cn } from "./cn"

it("correctly combines css classes", () => {
  const output = cn("text-red-500", "bg-blue-500")
  expect(output).toEqual("text-red-500 bg-blue-500")
  expect(output).not.toEqual("xxx")
})
