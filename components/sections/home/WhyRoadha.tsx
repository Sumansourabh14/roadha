import H2 from "@/components/text/H2";
import { Card, CardContent } from "@/components/ui/card";

export default function WhyRoadha() {
  return (
    <section className="max-w-[1000px] py-20 px-8 mx-auto">
      <div className="max-w-5xl mx-auto mb-12">
        <H2 title="Why Roadha?" />
        <section className="max-w-2xl space-y-4">
          <p>It is simple.</p>
          <p>
            Indians keep on buying more & more cars. But have their brains
            gotten bigger with the road safety knowledge too?
          </p>
          <p>Not so much.</p>
          <p>
            According to MoRTH,{" "}
            <span className="text-4xl font-bold text-red-400">153,972</span>{" "}
            persons were{" "}
            <a
              href="https://tripc.iitd.ac.in/assets/publication/RSI_2023_web.pdf"
              className="underline hover:no-underline"
              target="_blank"
            >
              killed in road crashes
            </a>{" "}
            in the year 2021.
          </p>
          <p>Are these increasing year by year?</p>
          <p>Yes.</p>
          <p>Hence, Roadha.</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A platform where you can...
          </h3>
        </section>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Learn the Rules</h3>
            <p className="text-zinc-400">
              Master the basics of Indian traffic laws through structured,
              simple lessons.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Quiz Your Knowledge</h3>
            <p className="text-zinc-400">
              Interactive quizzes help reinforce safety tips and real-life
              scenarios.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Drive with Confidence
            </h3>
            <p className="text-zinc-400">
              Build habits that protect you, your family, and others on the
              road.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
