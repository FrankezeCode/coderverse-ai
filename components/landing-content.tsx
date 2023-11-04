"Use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Jude",
        avatar: "J",
        title: "Content creator ",
        description: "This tool has helped me a lot in my work!"
    },
    {
        name: "Antonio",
        avatar: "A",
        title: "blogger",
        description: "This is one of the best Ai tool I've used!"
    },
    {
        name: "John",
        avatar: "J",
        title: "Software Developer",
        description: "Very effective tool for  programmers!"
    },
  
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item)=>(
            <Card key={item.description} className="bg-[#192339] border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                    <div>
                        <p className="text-lg">{item.name}</p>
                        <p className="text-zinc-400 text-sm">{item.title}</p>
                    </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                    {item.description}
                </CardContent>
              </CardHeader>
            </Card>
        ))}
      </div>
    </div>
  )
}
